/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ToastAndroid, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import I18N from '../../translations/languageControl'

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

    onIntentToTestScreen = () => {
        this.props.navigation.navigate('TestingScreen', {currentLanguage: this.state.language });
    }

    render() {
        const { params } = this.props.navigation.state;
        I18N.setLocale(this.state.language);
        const myObj = I18N.t('mainscreen');

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello {params.username}</Text>
                <Text style={styles.welcome}> {myObj.welcomeTitle}  </Text>
                <RadioForm 
                    radio_props= {arrLanguages}
                    initial = {0}
                    onPress = {(value) => {
                        this.setState({language: ((value > 0) ? "vi" : "en")  })
                        // if(value > 0) {
                        //     this.setState({language: "vi"});
                        // } else {
                        //     this.setState({language: "en"});
                        // }
                    }}
                    buttonSize = {25}
                    selectedButtonColor = {'blue'}
                    selectedLabelColor = {'blue'}
                    labelStyle = {{fontSize : 20, }}
                    formHorizontal = {false}
                            
                />
                <TouchableOpacity onPress={this.onIntentToTestScreen} style= {{justifyContent:"center",alignSelf:"center" , backgroundColor : 'green', width: 70, height: 80, borderRadius: 10}}   >
                        <View>
                            <Text style = {{color: 'white', fontSize: 15,}}>Go to TestScreen</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        );
    }
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
