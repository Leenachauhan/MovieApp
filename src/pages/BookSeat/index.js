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
function BookSeat(props) {
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
    return (
      <Text style={[Typography.subheading2, {color: theme.colors.accent}]}>
        March 5, 2021 I 12:30 hall 1
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
              onPress={() => navigation.navigate('BookTicket')}
            />
            <View style={[Layout.column, Layout.contentCenter]}>
              <Text style={[Typography.title]}>{movieData.title}</Text>
              <Text
                style={[Typography.subheading2, {color: theme.colors.accent}]}>
                March 5, 2021 I 12:30 hall 1
              </Text>
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
          <View
            style={[
              {
                backgroundColor: '#A6A6A620',
                height: '68%',
                paddingTop: spacing.x4,
                justifyContent: 'space-between',
              },
            ]}>
            <TouchableOpacity
              style={[Layout.contentCenter, style.HallImageWrapper]}>
              <Image source={assets.seat_view} style={style.searchImageStyle} />
            </TouchableOpacity>
            <View>
              <View
                style={[
                  Layout.row,
                  {justifyContent: 'flex-end', marginBottom: 12},
                ]}>
                <Icon
                  name="plus"
                  color={theme.colors.text}
                  size={22}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 16,
                    padding: 2,
                  }}
                  onPress={() => {}}
                />
                <Icon
                  name="minus"
                  color={theme.colors.text}
                  size={22}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 16,
                    padding: 2,
                    marginHorizontal: 12,
                  }}
                  onPress={() => {}}
                />
              </View>
            </View>
          </View>
          <View style={[{marginHorizontal: 16}]}>
            <View style={[Layout.row, {marginBottom: spacing.x2}]}>
              <View style={[Layout.row, {width: '40%'}]}>
                <Icon
                  name="seat"
                  color={'#CD9D0F'}
                  size={22}
                  style={[{marginRight: 8}]}
                />
                <Text
                  style={[Typography.body, {color: theme.colors.placeholder}]}>
                  Selected
                </Text>
              </View>
              <View style={[Layout.row]}>
                <Icon
                  name="seat"
                  color={'#A6A6A6'}
                  size={22}
                  style={[{marginRight: 8}]}
                />
                <Text
                  style={[Typography.body, {color: theme.colors.placeholder}]}>
                  Not available
                </Text>
              </View>
            </View>
            <View style={[Layout.row]}>
              <View style={[Layout.row, {width: '40%'}]}>
                <Icon
                  name="seat"
                  color={'#564CA3'}
                  size={22}
                  style={[{marginRight: 8}]}
                />
                <Text
                  style={[Typography.body, {color: theme.colors.placeholder}]}>
                  VIP (150$)
                </Text>
              </View>
              <View style={[Layout.row]}>
                <Icon
                  name="seat"
                  color={'#61C3F2'}
                  size={22}
                  style={[{marginRight: 8}]}
                />
                <Text
                  style={[Typography.body, {color: theme.colors.placeholder}]}>
                  Regular (50 $)
                </Text>
              </View>
            </View>
          </View>
          <View style={[{marginHorizontal: 16}]}>
            <View
              style={[
                Layout.row,
                Layout.contentCenter,
                {
                  backgroundColor: '#A6A6A630',
                  width: 108,
                  height: spacing.height4,
                  borderRadius: 12,
                },
              ]}>
              <Text style={[Layout.row]}>
                <Text style={[Typography.body2]}>4 </Text>
                <Text style={[Typography.body]}>/ 3 row</Text>
              </Text>
              <Icon
                name="close"
                color={theme.colors.text}
                size={22}
                style={{marginLeft: spacing.x1}}
              />
            </View>
          </View>
          <View style={[Layout.row, Layout.contentCenter, style.buttonWrapper]}>
            <Button
              title={
                <Text style={[{flexDirection: 'column'}]}>
                  <Text style={[Typography.caption]}>Total Price{'\n'}</Text>
                  <Text style={[Typography.body2, {lineHeight: 20}]}>$ 50</Text>
                </Text>
              }
              titleStyle={[Typography.button]}
              buttonStyle={[{backgroundColor: 'transparent'}]}
              containerStyle={[Layout.contentCenter, style.buttonStyle]}
            />
            <Button
              title="Proceed to pay"
              titleStyle={[Typography.button]}
              buttonStyle={[{backgroundColor: 'transparent'}]}
              containerStyle={[Layout.contentCenter, style.buttonStyle2]}
            />
          </View>
        </View>
      </View>
    )
  );
}

export default BookSeat;
