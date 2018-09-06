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
import Testing from './src/components/MainScreen/TestingScreen'
import { StackNavigator, createStackNavigator } from 'react-navigation';
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default createStackNavigator({
    LoginScreen: {
        screen: Login
    },
    LanguageActivity: {
        screen: Setting
    },
    TestingScreen: {
        screen: Testing
    },

});

// class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <navigator />
//             </Provider>
//         )
//     }
// }
