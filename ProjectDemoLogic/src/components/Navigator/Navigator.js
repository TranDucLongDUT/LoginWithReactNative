import SettingScreen from '../MainScreen/SettingScreen'
import TestingScreen from '../MainScreen/TestingScreen'
import LoginScreen from '../Login/LoginScreen'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import I18N from '../../translations/languageControl'

export const Navigator = new StackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    LanguageActivity: {
        screen: SettingScreen
    },
    TestingScreen: {
        screen: TestingScreen
    },
})

class Nav extends Component {
    render() {
        I18N.setLocale(this.props.language);
        console.log('Navigator Cha',this.props.language);
        return ( 
            <Navigator/>
        )
    }
}

const mapStateToProps = state => ({
    language: state.language,
})

export default connect(mapStateToProps)(Nav);
