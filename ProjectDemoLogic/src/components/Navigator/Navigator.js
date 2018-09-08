import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, createStackNavigator, } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import I18N from '../../translations/languageControl'

//MainStack
import SettingScreen from '../MainStack/Main/SettingScreen'
import TestingScreen from '../MainStack/Main/TestingScreen'
import MainScreen from '../MainStack/Main/MainScreen'
//AccountStack
import LoginScreen from '../AccountStack/Login/LoginScreen'
import SignUpScreen from '../AccountStack/SignUp/SignUpScreen'
import ForgotPasswordScreen from '../AccountStack/ForgotPassword/ForgotPasswordScreen'

const AccountStack = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        ForgotPassword: { screen: ForgotPasswordScreen },
    },
    { initialRouteName: 'Login' }
)

const MainStack = createMaterialBottomTabNavigator(
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

export const Navigator = createStackNavigator(
    {
        MainStack: {
            screen: MainStack,
            navigationOptions: { header: null }
        },
        AccountStack: {
            screen: AccountStack,
            navigationOptions: { header: null },
        }
    },
    { initialRouteName: 'AccountStack', }
)

export class Nav extends Component {
    render() {
        I18N.setLocale(this.props.language);
        console.log('Navigator Cha', this.props.language);
        return (
            <Navigator />
        )
    }
}

const mapStateToProps = state => ({
    language: state.language,
})

export default connect(mapStateToProps)(Nav);
