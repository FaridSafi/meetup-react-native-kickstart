import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
  Platform,
  ScrollView,
} from 'react-native';

import ConditionsNow from './ConditionsNow';
import ConditionsNextDays from './ConditionsNextDays';


import ConditionsParis from './data/conditions-paris.json';


class AwesomeProject extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      temp: 0,
      isLoading: true,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        city: ConditionsParis.current_observation.display_location.full,
        temp: ConditionsParis.current_observation.temp_c,
        isLoading: false,
      });
    }, 1000);
  }
  componentDidMount() {

  }
  render() {
    if (this.state.isLoading) {
      if (Platform.OS === 'ios') {
        return (
          <ActivityIndicatorIOS
            animating={true}
            size="large"
          />
        );
      } else {
      }
    }
    return (
      <ScrollView>
        <ConditionsNow
          city={this.state.city}
          temp={this.state.temp}
        />
        <ConditionsNextDays
          day={'Dimanche'}
          image={require('./sun.jpg')}
          temp={'22'}
        />
        <ConditionsNextDays
          day={'Dimanche'}
          image={require('./sun.jpg')}
          temp={'22'}
        />
        <ConditionsNextDays
          day={'Dimanche'}
          image={require('./sun.jpg')}
          temp={'22'}
        />
        <ConditionsNextDays
          day={'Dimanche'}
          image={require('./sun.jpg')}
          temp={'22'}
        />

      </ScrollView>
    );
  }
  componentWillUnmount() {

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

export default AwesomeProject;
