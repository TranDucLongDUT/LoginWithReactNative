import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import I18N from '../../translations/languageControl'

type Props = {};
export default class Testing extends Component<Props> {

    static navigationOptions = {
        title: "Testing ",
    }
    render() {
        console.log('TestingScreen - render');
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation;
        return (
            <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
                <Text style={{fontSize:25, color:'red'}}> Current Language: {params.currentLanguage}</Text>
                <Text style = {{fontSize:30}}>
                    {I18N.t('testingscreen')}
                </Text>
                <TouchableOpacity style={{width: 200, height:100}}  onPress={() => {
                    goBack();
                }} >
                    <View>
                        <Text style={{fontSize: 25, padding:5, backgroundColor: '#FF80AB'}}>Go Back</Text>
                    </View>
                 </TouchableOpacity>
            </View>
        )
    }
}
 