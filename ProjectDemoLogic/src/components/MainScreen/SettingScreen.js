/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ToastAndroid } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import I18N from '../../translations/languageControl'
import I18nControl from 'react-native-i18n'

var arrLanguages = [
    {label: "English", value: 0},
    {label: "VietNam", value: 1},
]

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = props;
        this.state = {language: "en"}
    }

    static navigationOptions = {
        title: "Home ",
    }
    render() {
        const { params } = this.props.navigation.state;
        I18nControl.locale = this.state.language;
        const myObj = I18N.t('mainscreen');
        return (
            <View style={styles.container}>
                {/* <Text style={styles.welcome}>Hello {params.username}</Text> */}
                <Text style={styles.welcome}> {myObj.welcomeTitle} </Text>
                <RadioForm 
                    radio_props= {arrLanguages}
                    initial = {0}
                    onPress = {(value) => {
                        if(value > 0) {
                            this.setState({language: "vi"});
                        } else {
                            this.setState({language: "en"});
                        }
                    }}
                    buttonSize = {25}
                    selectedButtonColor = {'blue'}
                    selectedLabelColor = {'blue'}
                    labelStyle = {{fontSize : 20, }}
                    formHorizontal = {false}
                            
                />

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
