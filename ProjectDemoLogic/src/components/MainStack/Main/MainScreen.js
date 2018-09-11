import React, { Component } from 'react';
import { Text, View } from 'react-native'

export default class MainScreen extends Component {
    render() {
        console.log('MainScreen: Render');
        
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>This is Main Screen !</Text>
            </View>
        )
    }
}