/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login'
import LanguageScreen from './src/components/Language/LanguageScreen'
import { createStackNavigator } from 'react-navigation';



export default createStackNavigator({
  LoginScreen: {
    screen: Login
  },
  LanguageActivity: {
    screen: LanguageScreen
  },
}); 
