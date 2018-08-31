/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import I18n from 'react-native-i18n';


type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        title: "Home ",
    }
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello {params.username}</Text>
                <Text style={styles.welcome}> {I18n.t('title')}</Text>
            </View>
        );
    }
}

//
I18n.fallbacks = true;
I18n.translations = {
    en: {
        title: 'Welcome to Language Screen',
    },
    vi: {
        title: 'Chào mừng đến với màn hình Language'
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
