/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, BackHandler, StyleSheet, Text, Alert, View, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

export default class DemoLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      checkLogin: 0
    }
  }

  //Event Exit
  onPressExitButton = () => {
    Alert.alert('Exit App', 'Do you want to exit?', [
      { text: 'Yes', onPress: () => { BackHandler.exitApp() } },
      { text: 'No', onPress: () => { } },
    ],
      { cancelable: false });
    return true;
  }

  //Event : Submit
  onSubmit = () => {
    if (this.state.username == '') {
      Alert.alert('Please input username!');
    }
    else if(this.state.password == '') {
      Alert.alert('Please input your password!');
    }
    else {
      return fetch('http://10.0.2.2:8888/user/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({ checkLogin: responseJson.success });
          if (this.state.checkLogin > 0) {
            Alert.alert('Login Success!');
          }
          else {
            Alert.alert('Login Failed!')
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Demo Login</Text>
        <View style={styles.styleViewInput}>
          <Text style={{ marginRight: 10, color: 'gray' }}>UserName: </Text>
          <TextInput placeholder="Input your username"
            placeholderTextColor="black" style={styles.textInput}
            onChangeText={(_user) => {
              this.setState({ username: _user })
            }} />
        </View>

        <View style={styles.styleViewInput}>
          <Text style={{ marginRight: 10, color: 'gray' }}> Password: </Text>
          <TextInput placeholder="Input your password"
            placeholderTextColor="black" style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(_pass) => {
              this.setState({ password: _pass })
            }} />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center", alignItems: 'center' }}>
          <TouchableOpacity onPress={this.onSubmit}>
            <View style={styles.styleButtonLogin}>
              <Text style={styles.styleButtonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPressExitButton}>
            <View style={styles.styleButtonExit}>
              <Text style={styles.styleButtonText}>Exit</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View >
    )
  }
}
//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#E65100',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#EFEBE9',
    flex: 1,
    borderRadius: 20,
  },
  styleViewInput: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  styleButtonLogin: {
    width: 70,
    height: 50,
    alignItems: "center",
    backgroundColor: '#2196F3',
    marginRight: 20,
    borderRadius: 10
  },
  styleButtonExit: {
    width: 70,
    height: 50,
    alignItems: "center",
    backgroundColor: '#D32F2F',
    borderRadius: 10
  },
  styleButtonText: {
    padding: 15,
    color: 'white',
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center"
  }

});