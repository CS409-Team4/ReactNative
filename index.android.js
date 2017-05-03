/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './Main';
import UserProfile from './UserProfile';

export default class IUI extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    if (route.name == 'Main') {
      return <Main navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'UserProfile') {
      return <UserProfile navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: "Main" }}
        renderScene={ this.renderScene } />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('IUI', () => IUI);
