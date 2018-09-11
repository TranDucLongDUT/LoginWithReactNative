import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { connect } from 'react-redux'
//Language C
import I18N from '../../../translations/languageControl'
import { vietnameLanguage, englishLanguage } from '../../../redux/action'

var arrLanguages = [
    { label: 'en', value: 0 },
    { label: 'vi', value: 1 },
]

class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }  

    handleVietNamLanguage = () => {
        this.props.vietnameLanguage();
    }

    handleEnglistLanguage = () => {
        this.props.englishLanguage();
    } 

    onIntentToHomeScreen = () => {
        this.props.navigation.navigate('Home', { currentLanguage: I18N.getCurrentLanguage() });
    }

    render() {
        console.log('SettingScreen - render');
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation;
        const myObj = I18N.t('mainscreen');

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello {params.username}</Text>
                <Text style={styles.welcome}> {myObj.welcomeTitle}  </Text>
                <RadioForm
                    radio_props={arrLanguages}
                    initial={0}
                    onPress={(value) => {
                        // this.setState({ language: ((value > 0) ? "vi" : "en") })
                        if (value > 0) {
                            this.handleVietNamLanguage();
                        } else {
                            this.handleEnglistLanguage();
                        }
                    }}
                    buttonSize={25}
                    selectedButtonColor={'blue'}
                    selectedLabelColor={'blue'}
                    labelStyle={{ fontSize: 20, }}
                    formHorizontal={false}

                />
                <Button 
                    title = "Go To Home Screen"
                    onPress = {this.onIntentToHomeScreen}
                />
                
            </View>
        );
    }
}

//redux
const mapStateToProps = (store) => {
    return {
        language: store.language,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        vietnameLanguage: () => {
            dispatch(vietnameLanguage());
        },
        englishLanguage: () => {
            dispatch(englishLanguage());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }, 
});
