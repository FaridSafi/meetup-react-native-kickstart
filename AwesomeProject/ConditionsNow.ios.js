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
        <Text style={styles.city}>
          {this.props.city}
        </Text>
        <Text style={styles.temp}>
          {this.props.temp}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#3333a1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  city: {
    fontWeight: '200',
    fontSize: 25,
    color: '#fff',
  },
  temp: {
    fontSize: 50,
    color: '#fff',
  },
});

export default ConditionsNow;
