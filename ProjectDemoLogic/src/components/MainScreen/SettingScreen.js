/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import I18N from '../../translations/languageControl'


type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        title: "Home ",
    }
    render() {
        const { params } = this.props.navigation.state;
        const myObj = I18N.t('mainscreen');
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello {params.username}</Text>
                <Text style={styles.welcome}> {myObj.welcomeTitle}</Text>
            </View>
        );
    }
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
