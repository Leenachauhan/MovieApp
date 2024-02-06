import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../../styles/layout';
import Typography from '../../styles/typography';
import theme from '../../styles/theme';
import style from './style';
import spacing from '../../styles/spacing';
import dayjs from 'dayjs';
import assets from '../../assets';
function BookTicket(props) {
  const [movieData, setMovieData] = useState();
  const navigation = useNavigation();
  const Time_Slots = [
    {time: '5 Feb'},
    {time: '6 Feb'},
    {time: '7 Feb'},
    {time: '8 Feb'},
    {time: '9 Feb'},
    {time: '10 Feb'},
    {time: '11 Feb'},
    {time: '12 Feb'},
  ];

  const Movie_Hall_Data = [
    {time: '12:30', price_range: '50$', bonus: '2500 bonus'},
    {time: '13:30', price_range: '75$', bonus: '2500 bonus'},
    {time: '1:30', price_range: '85$', bonus: '2500 bonus'},
    {time: '4:00', price_range: '90$', bonus: '2500 bonus'},
    {time: '7:30', price_range: '150$', bonus: '2500 bonus'},
  ];

  useEffect(() => getData(), []);

  const getData = () => {
    var propsData = props?.route?.params?.data.id ?? '';
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${propsData}?api_key=8c5bb2670ffb317544e8ddd63a888e5f`,
      )
      .then(response => {
        // console.log(response.data);
        setMovieData(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderTime = () => {
    var formatedDate = dayjs(movieData.release_date).format('MMMM DD, YYYY');
    return (
      <Text style={[Typography.subheading2, {color: theme.colors.accent}]}>
        In Theaters {formatedDate}
      </Text>
    );
  };

  return (
    movieData && (
      <View style={[style.container]}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={[style.headerStyle]}>
          <View style={[Layout.row, Layout.verticalMargin]}>
            <Icon
              name="chevron-left"
              color={theme.colors.text}
              size={32}
              onPress={() => navigation.navigate('MovieDetail')}
            />
            <View style={[Layout.column, Layout.contentCenter]}>
              <Text style={[Typography.title]}>{movieData.title}</Text>
              {renderTime()}
            </View>
          </View>
        </View>
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'space-between',
              height: Dimensions.get('window').height,
            },
          ]}>
          <View style={style.flatListWrapper}>
            <View>
              <Text style={[Typography.title, Layout.verticalMargin]}>
                Date
              </Text>
              <FlatList
                horizontal={true}
                keyExtractor={(item, index) => item + index}
                data={Time_Slots}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <Button
                    title={item.time}
                    titleStyle={[
                      style.genreTextStyle,
                      {
                        color:
                          index == 0
                            ? theme.colors.textLight
                            : theme.colors.text,
                      },
                    ]}
                    buttonStyle={[
                      {backgroundColor: 'transparent', height: '100%'},
                    ]}
                    containerStyle={[
                      Layout.contentCenter,
                      style.genreButtonStyle,
                      {
                        backgroundColor:
                          index == 0 ? theme.colors.accent : '#A6A6A610',
                      },
                    ]}
                  />
                )}
              />
            </View>
            <View style={Layout.verticalMargin}>
              <FlatList
                horizontal={true}
                keyExtractor={(item, index) => item + index}
                data={Movie_Hall_Data}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View
                    style={[
                      {
                        marginRight: spacing.y2,
                      },
                    ]}>
                    <View style={[Layout.row]}>
                      <Text style={[Typography.body2]}>{item.time}</Text>
                      <Text
                        style={[
                          Typography.body,
                          {
                            color: theme.colors.placeholder,
                            marginLeft: spacing.y2,
                          },
                        ]}>
                        Cinetech + hall {index + 1}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={[
                        Layout.contentCenter,
                        style.HallImageWrapper,
                        {
                          borderColor:
                            index == 0
                              ? theme.colors.accent
                              : theme.colors.disabled,
                        },
                      ]}>
                      <Image
                        source={assets.hall_view}
                        style={style.searchImageStyle}
                      />
                    </TouchableOpacity>
                    <Text style={[Layout.row]}>
                      <Text
                        style={[
                          Typography.body,
                          {color: theme.colors.placeholder},
                        ]}>
                        From{' '}
                      </Text>
                      <Text style={[Typography.body2]}>
                        {item.price_range}{' '}
                      </Text>
                      <Text
                        style={[
                          Typography.body,
                          {color: theme.colors.placeholder},
                        ]}>
                        or{' '}
                      </Text>
                      <Text style={[Typography.body2]}>{item.bonus}</Text>
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
          <Button
            title="Get Tickets"
            titleStyle={[Typography.button]}
            buttonStyle={[
              {backgroundColor: 'transparent', width: '100%', height: '100%'},
            ]}
            containerStyle={[Layout.contentCenter, style.buttonStyle]}
            onPress={() =>
              navigation.navigate('BookSeat', {
                data: movieData,
              })
            }
          />
        </View>
      </View>
    )
  );
}

export default BookTicket;
