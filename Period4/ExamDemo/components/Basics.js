import React, { Component } from 'react';
import { Text } from 'react-native';

class Basics extends Component {
    static navigationOptions = { title: 'Learn the Basics' }
    render() {
      return <Text>Hello World!</Text>;
    }
}

export { Basics };
