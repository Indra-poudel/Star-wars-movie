// @flow

import React from 'react';
import type {Node} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import ScreenRoutes from './src/constants/screen';
import Home from './src/screens/Home';
import MovieDetails from './src/screens/MovieDetails';

const Stack = createStackNavigator();

const getMovieDetailScreenOptions = ({route}) => ({
  title: route.params.title,
});

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: 'SourceSansPro-Regular',
      },
    }}
    initialRouteName={ScreenRoutes.HOME_SCREEN}>
    <Stack.Screen
      name={ScreenRoutes.HOME_SCREEN}
      component={Home}
      options={{
        headerTitle: 'Movies',
      }}
    />

    <Stack.Screen
      name={ScreenRoutes.MOVIE_DETAILS}
      component={MovieDetails}
      options={getMovieDetailScreenOptions}
    />
  </Stack.Navigator>
);

const App: () => Node = () => {
  return (
    <SafeAreaView style={Style.safeAreaView}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
