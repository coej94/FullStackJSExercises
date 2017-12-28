import React, { Component } from 'react';
import { View } from 'react-native';

class FlexBox extends Component {
 static navigationOptions = { title: 'Playing with Flexbox Positions' }
  render() {
    return (
      <View 
       style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

export { FlexBox };
