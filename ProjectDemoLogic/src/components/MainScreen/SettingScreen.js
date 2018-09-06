import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import I18N from '../../translations/languageControl'
import { vietnameLanguage, englishLanguage } from '../../redux/action'
import { connect } from 'react-redux'

var arrLanguages = [
    { label: 'en', value: 0 },
    { label: 'vi', value: 1 },
]

type Props = {};
class SettingScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = props;
        // this.state = { language: "en" }
    }

    handleVietNamLanguage = () => {
        this.props.vietnameLanguage();
    }

    handleEnglistLanguage = () => {
        this.props.englishLanguage();
    }

    static navigationOptions = {
        title: "Home ",
    }

    onIntentToTestScreen = () => {
        this.props.navigation.navigate('TestingScreen', { currentLanguage: I18N.getCurrentLanguage() });
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
                <TouchableOpacity onPress={this.onIntentToTestScreen} style={styles.touchableopacity} >
                    <View>
                        <Text style={{ color: 'white', fontSize: 15, padding: 5, }}>Go to TestScreen</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{width: 200, height:100}}  onPress={() => {
                    goBack();
                }} >
                    <View>
                        <Text style={{fontSize: 25, padding:5, backgroundColor: 'blue'}}>Go Back</Text>
                    </View>
                 </TouchableOpacity>
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
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    touchableopacity: {
        justifyContent: "flex-start",
        backgroundColor: 'green',
        width: 150,
        height: 50,
        borderRadius: 10
    }
});
