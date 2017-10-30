import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Style extends Component {
  static navigationOptions = { title: 'Styling and smiling' }
  
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        
      </View>
    );
  }
}

const styles = {
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
};

export { Style };
