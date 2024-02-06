import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../../styles/layout';
import Typography from '../../styles/typography';
import theme from '../../styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import spacing from '../../styles/spacing';
function Search() {
  const [genreMovieData, setGenreMovieData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getData();
    getMovieData();
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

  const getMovieData = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=8c5bb2670ffb317544e8ddd63a888e5f',
      )
      .then(response => {
        setMovieData(response.data.results);
        return response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getSearchData = text => {
    setSearchText(text);
    axios
      .request({
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzViYjI2NzBmZmIzMTc1NDRlOGRkZDYzYTg4OGU1ZiIsInN1YiI6IjY1YmU2Y2VlYmE0ODAyMDE2MTY5ODM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rj9I_QchNy7PWCAiPgODOq9syKKMezza5d6TDhM2xJo`,
        },
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?query=' + text,
      })
      .then(response => {
        // console.log(response.data.results);
        setSearchData(response.data.results);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderGenreData = () => {
    return (
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => (
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w710_and_h400_multi_faces/${item.backdrop_path}`,
            }}
            imageStyle={style.genreImageStyle}
            style={style.imageBackgroundStyle2}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
              style={[style.linearGradient]}>
              <Text style={[Typography.subheading2, style.imageTextstyle2]}>
                <Text
                  style={(Typography.body2, {color: theme.colors.textLight})}>
                  {genreView(item)}
                </Text>
              </Text>
            </LinearGradient>
          </ImageBackground>
        )}
        data={movieData}
        keyExtractor={(item, index) => item + index}
      />
    );
  };

  const renderSearchData = () => {
    return (
      <View>
        <Text
          style={[
            Typography.body2,
            {
              borderBottomColor: theme.colors.disabled,
              borderBottomWidth: 1,
              paddingBottom: spacing.y2,
              marginBottom: spacing.x1,
            },
          ]}>
          Top Results
        </Text>
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
                  <Text style={Typography.caption}>{genreView(item)}</Text>
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
    // console.log('item', item);
    if (item.genre_ids.length > 0) {
      var genreID = item.genre_ids[0];
      for (let i = 0; i <= genreMovieData.length; i++) {
        if (genreID == genreMovieData[i]?.id) {
          return genreMovieData[i].name;
        }
      }
    }
  };

  return (
    <View style={[style.container]}>
      <View style={[style.headerStyle]}>
        <View
          style={[
            Layout.row,
            {
              backgroundColor: '#f6f6fa',
              justifyContent: 'space-between',
              borderRadius: 30,
              paddingHorizontal: 16,
              paddingVertical: 8,
            },
          ]}>
          <Icon
            name="magnify"
            color={theme.colors.text}
            size={22}
            onPress={() => {}}
          />
          <TextInput
            style={[
              {
                width: '80%',
                color: 'black',
              },
            ]}
            editable
            placeholderTextColor={theme.colors.placeholder}
            placeholder="TV shows, movies and more"
            onChangeText={text => getSearchData(text)}
            value={searchText}
            clearButtonMode="while-editing"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            onSubmitEditing={e => {
              navigation.navigate('SearchList', {
                data: searchData,
              });
            }}
          />
          <Icon
            name="close"
            color={theme.colors.text}
            size={22}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Layout.pageColumnCentered, style.flatListWrapper]}>
          {searchText ? renderSearchData() : renderGenreData()}
        </View>
      </ScrollView>
    </View>
  );
}

export default Search;
