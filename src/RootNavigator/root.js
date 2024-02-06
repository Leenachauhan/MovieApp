/* eslint-disable no-unused-vars */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {Platform, StyleSheet} from 'react-native';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import MovieDetail from '../pages/MovieDetail';
import SearchList from '../pages/Search/SearchList';
import BookTicket from '../pages/BookTicket';
import BookSeat from '../pages/BookSeat';
const RootStack = createStackNavigator();

const RootStackScreens = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <RootStack.Screen name="Dashboard" component={Dashboard} />
      <RootStack.Screen name="SearchList" component={SearchList} />
      <RootStack.Screen name="Search" component={Search} />
      <RootStack.Screen name="MovieDetail" component={MovieDetail} />
      <RootStack.Screen name="BookTicket" component={BookTicket} />
      <RootStack.Screen name="BookSeat" component={BookSeat} />
    </RootStack.Navigator>
  );
};
export default RootStackScreens;
