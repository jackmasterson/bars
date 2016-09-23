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

class reaction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          All work and no play makes Jack a dull boy
        </Text>
        <Text style={styles.instructions}>
          Don{'\''}t you agree?
        </Text>
        <Text style={styles.zany}>I{'\''}m zany!</Text>
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
    padding: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  zany: {
    textAlign: 'right',
    color: 'green',
    letterSpacing: 15
  }
});

AppRegistry.registerComponent('reaction', () => reaction);
