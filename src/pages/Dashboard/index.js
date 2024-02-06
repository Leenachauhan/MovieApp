import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../../styles/layout';
import Typography from '../../styles/typography';
import theme from '../../styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
function Dashboard() {
  const [movieData, setMovieData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => getData(), []);

  const getData = () => {
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

  return (
    <View style={[style.container]}>
      <View style={[Layout.row, style.headerStyle]}>
        <Text style={Typography.subheading2}>Watch</Text>
        <Icon
          name="magnify"
          color={theme.colors.text}
          size={22}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Layout.pageColumnCentered, style.flatListWrapper]}>
          <FlatList
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={style.imageBackgroundWrapper}
                onPress={() =>
                  navigation.navigate('MovieDetail', {
                    data: item,
                  })
                }>
                <ImageBackground
                  source={{
                    uri: `https://image.tmdb.org/t/p/w710_and_h400_multi_faces/${item.backdrop_path}`,
                  }}
                  imageStyle={{
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                  style={style.imageBackgroundStyle}>
                  <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
                    style={[style.linearGradient]}>
                    <Text
                      style={[Typography.subheading2, style.imageTextstyle]}>
                      {item.original_title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            )}
            data={movieData}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Dashboard;
