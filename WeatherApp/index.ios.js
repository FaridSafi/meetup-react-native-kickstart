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
} from 'react-native';

// http://api.wunderground.com/api/6483a01fa60b1b42/forecast/lang:FR/q/zmw:00000.37.07156.json
// http://api.wunderground.com/api/6483a01fa60b1b42/conditions/lang:FR/q/zmw:00000.37.07156.json

import ConditionsNow from './app/ConditionsNow.js';

class RNApp extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      condition: '',
      temp: '',
    };
    console.log('constructor');
  }
  componentWillMount() {
    console.log('will mount');

    setTimeout(() => {
      console.log('after 1000 ms');
      this.setState({
        city: 'Paris',
        condition: 'Ensoleillé',
        temp: '25°',
      });
    }, 1000);
  }
  render() {
    console.log('render');

    return (
      <View style={styles.container}>
        <ConditionsNow
          city={this.state.city}
          condition={this.state.condition}
          temp={this.state.temp}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('RNApp', () => RNApp);
