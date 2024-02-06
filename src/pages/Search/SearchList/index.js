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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../../../styles/layout';
import Typography from '../../../styles/typography';
import theme from '../../../styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import spacing from '../../../styles/spacing';
function SearchList(props) {
  const [genreMovieData, setGenreMovieData] = useState([]);
  const [searchData, setSearchData] = useState(
    props?.route?.params?.data ?? [],
  );
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .request({
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzViYjI2NzBmZmIzMTc1NDRlOGRkZDYzYTg4OGU1ZiIsInN1YiI6IjY1YmU2Y2VlYmE0ODAyMDE2MTY5ODM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rj9I_QchNy7PWCAiPgODOq9syKKMezza5d6TDhM2xJo`,
        },
        method: 'GET',
        url: `https://api.themoviedb.org/3/genre/movie/list`,
      })
      .then(response => {
        // console.log(response.data.genres);
        setGenreMovieData(response.data.genres);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderSearchData = () => {
    return (
      <View>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={[
                Layout.row,
                {
                  marginVertical: 12,
                },
              ]}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                }}
                style={style.searchImageStyle}
              />
              <View style={[Layout.row, style.movieDetailWrapper]}>
                <View style={{width: '90%'}}>
                  <Text style={[Typography.subheading2]} numberOfLines={2}>
                    {item.original_title}
                  </Text>
                  {genreView(item)}
                </View>
                <Icon
                  name="dots-horizontal"
                  color={theme.colors.accent}
                  size={26}
                  onPress={() => {}}
                />
              </View>
            </View>
          )}
          data={searchData}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  };

  const genreView = item => {
    if (item && item.genre_ids.length > 0) {
      for (let i = 0; i <= genreMovieData.length; i++) {
        if (item.genre_ids[0] == genreMovieData[i]?.id) {
          return (
            <Text style={Typography.caption}>{genreMovieData[i].name}</Text>
          );
        }
      }
    }
  };

  return (
    <View style={[style.container]}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={[style.headerStyle]}>
        <View style={[Layout.row, Layout.verticalMargin]}>
          <Icon
            name="chevron-left"
            color={theme.colors.text}
            size={32}
            onPress={() => navigation.navigate('Dashboard')}
          />
          <Text style={[Typography.body2, {marginLeft: spacing.y2}]}>
            {searchData.length ?? 'no'} Results Found
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Layout.pageColumnCentered, style.flatListWrapper]}>
          {renderSearchData()}
        </View>
      </ScrollView>
    </View>
  );
}

export default SearchList;
