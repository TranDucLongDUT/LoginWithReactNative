import React, { Component } from 'react';
import store from './src/redux/store'
import { Provider } from 'react-redux'
import Navigator from './src/components/Navigator/Navigator'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        )
    }
}