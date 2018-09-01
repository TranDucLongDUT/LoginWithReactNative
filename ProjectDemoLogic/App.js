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



// export default createStackNavigator({
//   LoginScreen: {
//     screen: Login
//   },
//   LanguageActivity: {
//     screen: LanguageScreen
//   },
// }); 

export default class App extends Component<Props> {

  static navigationOptions = {
      title: "Home ",
  }
  render() {
    //   const { params } = this.props.navigation.state;

      return (
          <View>
              <Text >Hello  </Text>
          </View>
      );
  }
}
