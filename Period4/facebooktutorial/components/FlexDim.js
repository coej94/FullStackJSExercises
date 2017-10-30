import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDim extends Component {
    static navigationOptions = { title: 'With Flex Dimentions' }
  render() {
    return (
      <View style={{ flex: 1 /* With a height of 300 flex only devides the 300 px.*/ }}> 
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

export { FlexDim };
