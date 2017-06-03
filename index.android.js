/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import Main from './Main';
import UserProfile from './UserProfile';
import Layouts from './Layouts';
import ConferenceAgenda from './ConferenceAgenda';
import ItemLayouts from './ItemLayouts';
import Selection from './Selection';
import SelectionDetail from './SelectionDetail';
import Naver from './Naver';
import NaverWeb from './NaverWeb';
import About from './About';

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
    if (route.name == 'Layouts') {
      return <Layouts navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'ConferenceAgenda') {
      return <ConferenceAgenda navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'ItemLayouts') {
      return <ItemLayouts navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'Selection') {
      return <Selection navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'SelectionDetail') {
      return <SelectionDetail navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'Naver') {
      return <Naver navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'NaverWeb') {
      return <NaverWeb navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'About') {
        return <About navigator={navigator} {...route.passProps} />
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
