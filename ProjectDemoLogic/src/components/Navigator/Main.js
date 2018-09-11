import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import SettingScreen from '../MainStack/Main/SettingScreen'
import TestingScreen from '../MainStack/Main/TestingScreen'
import MainScreen from '../MainStack/Main/MainScreen'

export const MainStack = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: MainScreen,
            navigationOptions: () => ({
                activeTintColor: '#f0edf6',
                inactiveTintColor: '#3e2465',
                barStyle: { backgroundColor: '#90CAF9' },
            }),
        },
        Testing: {
            screen: TestingScreen,
            navigationOptions: () => ({
                activeTintColor: '#f0edf6',
                inactiveTintColor: '#3e2465',
                fontSize: 15,
                barStyle: { backgroundColor: '#2962FF' },
            }),
        },
        Setting: {
            title: 'Setting',
            screen: SettingScreen,
            navigationOptions: () => ({
                activeTintColor: '#f0edf6',
                inactiveTintColor: '#3e2465',
                barStyle: { backgroundColor: '#D1C4E9' },
            }),
        }
    },
    {
        initialRouteName: 'Home',
    },
)

export class Main extends Component {
    render() {
        return (
            <MainStack/>
        )
    }
}