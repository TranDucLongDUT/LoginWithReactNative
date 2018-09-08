import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import I18N from '../../../translations/languageControl'

export default class TestingScreen extends Component {

    static navigationOptions = {
        title: "Testing ",
    }

    onIntentToSettingScreen = () => {
        this.props.navigation.navigate('Setting');
    }

    render() {
        console.log('TestingScreen - render');
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>
                    {I18N.t('testingscreen')}
                </Text>

                <Button title="Go to Setting Screen"
                    onPress={this.onIntentToSettingScreen()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
    }
)