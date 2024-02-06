import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStackScreens from './src/RootNavigator/root';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <RootStackScreens />
      </NavigationContainer>
    </>
  );
}
