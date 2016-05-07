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
  View
} from 'react-native';

// http://api.wunderground.com/api/6483a01fa60b1b42/forecast/lang:FR/q/zmw:00000.37.07156.json
// http://api.wunderground.com/api/6483a01fa60b1b42/conditions/lang:FR/q/zmw:00000.37.07156.json

class RNApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentWillMount() {
    this.setState({
      data: require('./data/conditions-paris.json'),
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNApp', () => RNApp);
