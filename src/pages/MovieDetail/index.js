import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../../styles/layout';
import Typography from '../../styles/typography';
import theme from '../../styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {Button} from 'react-native-elements';
import spacing from '../../styles/spacing';
import dayjs from 'dayjs';
export default function MovieDetail(props) {
  const [movieData, setMovieData] = useState([]);
  const navigation = useNavigation();
  const backgroundColor = [
    '#15D2BC',
    '#E26CA5',
    '#564CA3',
    '#CD9D0F',
    '#34449f',
    '#64c3b1',
    '#f5a931',
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
      <Text style={[Typography.subheading2, {color: theme.colors.textLight}]}>
        {formatedDate}
      </Text>
    );
  };
  return (
    movieData && (
      <View style={Layout.safeArea}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          style={{
            width: Dimensions.get('window').width,
            height: 520,
            justifyContent: 'space-between',
          }}
          imageStyle={{resizeMode: 'cover'}}
          source={{
            uri: `https://image.tmdb.org/t/p/w710_and_h400_multi_faces/${movieData.poster_path}`,
          }}>
          <View style={[Layout.row, style.headerStyle, Layout.verticalMargin]}>
            <Icon
              name="chevron-left"
              color={theme.colors.textLight}
              size={32}
              style={{marginRight: 8}}
              onPress={() => navigation.navigate('Dashboard')}
            />
            <Text style={[Typography.title, {color: theme.colors.textLight}]}>
              Watch
            </Text>
          </View>
          <View style={[Layout.contentCenter, {marginBottom: spacing.x3}]}>
            <Text
              numberOfLines={2}
              style={[Typography.display1, {color: theme.colors.textLight}]}>
              {movieData.original_title}
            </Text>
            <Text
              style={[
                Typography.subheading2,
                {color: theme.colors.textLight, marginVertical: spacing.x1},
              ]}>
              In Theaters {renderTime()}
            </Text>
            <Button
              title="Get Tickets"
              titleStyle={[Typography.button]}
              buttonStyle={[
                {backgroundColor: 'transparent', width: '100%', height: '100%'},
              ]}
              containerStyle={[Layout.contentCenter, style.buttonStyle]}
              onPress={() =>
                navigation.navigate('BookTicket', {
                  data: movieData,
                })
              }
            />
            <Button
              icon={{
                name: 'play',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              title="Watch Trailer"
              titleStyle={[Typography.button]}
              buttonStyle={[{backgroundColor: 'transparent'}]}
              containerStyle={[Layout.contentCenter, style.buttonStyle2]}
            />
          </View>
        </ImageBackground>
        <View style={[{marginHorizontal: spacing.x2}]}>
          <Text style={[Typography.title, Layout.verticalMargin]}>Genres</Text>
          <FlatList
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            data={movieData.genres}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Button
                title={item.name}
                titleStyle={[style.genreTextStyle]}
                buttonStyle={[{backgroundColor: 'transparent', height: '100%'}]}
                containerStyle={[
                  Layout.contentCenter,
                  style.genreButtonStyle,
                  {backgroundColor: backgroundColor[index % 7]},
                ]}
              />
            )}
          />
          <Text style={[Typography.title, Layout.verticalMargin]}>
            Overview
          </Text>
          <Text style={[Typography.caption]}>{movieData.overview}</Text>
        </View>
      </View>
    )
  );
}
