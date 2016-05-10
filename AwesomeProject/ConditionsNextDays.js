import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';


class ConditionsNextDays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.day}>
          {this.props.day}
        </Text>
        <Image style={{
          width: 40,
          height: 40,
        }} source={this.props.image} />
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
    flexDirection: 'row',
  },
  day: {
    fontWeight: '200',
    fontSize: 25,
    // color: '#fff',
  },
  temp: {
    fontSize: 50,
    color: '#fff',
  },
});

export default ConditionsNextDays;
