import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';


class ConditionsNextDay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.day]}>{this.props.day}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={this.props.image} />
        </View>
        <Text style={[styles.text, styles.tempMax]}>{this.props.tempMax}</Text>
        <Text style={[styles.text, styles.tempMin]}>{this.props.tempMin}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  day: {
    flex: 0.4,
  },
  imageContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  tempMax: {
    flex: 0.2,
    textAlign: 'right',
  },
  tempMin: {
    flex: 0.2,
    textAlign: 'right',
  },
});

export default ConditionsNextDay;
