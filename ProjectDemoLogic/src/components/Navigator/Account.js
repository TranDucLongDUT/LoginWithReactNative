import React, { Component } from 'react';
import { StackNavigator, createStackNavigator, } from 'react-navigation'

import LoginScreen from '../AccountStack/Login/LoginScreen'
import SignUpScreen from '../AccountStack/SignUp/SignUpScreen'
import ForgotPasswordScreen from '../AccountStack/ForgotPassword/ForgotPasswordScreen'

export const AccountStack = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        ForgotPassword: { screen: ForgotPasswordScreen },
    },
    { initialRouteName: 'Login' }
)

export class Account extends Component {
    render() {
        return (
            <AccountStack/>
        )
    }
}