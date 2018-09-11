import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStackNavigator, } from 'react-navigation'
import I18N from '../../translations/languageControl'
import { Account } from './Account';
import { Main } from './Main';

export const Navigator = createStackNavigator(
    {
        MainStack: {
            screen: Main,
            navigationOptions: { header: null }
        },
        AccountStack: {
            screen: Account,
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