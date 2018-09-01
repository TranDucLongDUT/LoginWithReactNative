/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/LoginScreen'
import Setting from './src/components/MainScreen/SettingScreen'
import { createStackNavigator } from 'react-navigation';
import I18n from './src/translations/languageControl'

export default createStackNavigator({
    LoginScreen: {
        screen: Login
    },
    LanguageActivity: {
        screen: Setting
    },
});
