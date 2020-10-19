import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './view/login';
import Splash from './view/Splash';

const App = createStackNavigator({

  Splash: { screen: Splash, navigationOptions: { header: null } },
  Login: { screen: Login, navigationOptions: { header: null } }

});

export default createAppContainer(App);