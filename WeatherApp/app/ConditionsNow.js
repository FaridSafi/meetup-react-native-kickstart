import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


class ConditionsNow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.city}>{this.props.city}</Text>
        <Text style={styles.condition}>{this.props.condition}</Text>
        <Text style={styles.temp}>{this.props.temp}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  city: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 26,
  },
  condition: {
    fontWeight: '400',
    color: '#fff',
    fontSize: 22,
  },
  temp: {
    fontWeight: '100',
    color: '#fff',
    fontSize: 90,
  }
});

export default ConditionsNow;
