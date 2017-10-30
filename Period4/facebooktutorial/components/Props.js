import React from 'react';
import { View, Text } from 'react-native';

class Props extends React.Component {
  static navigationOptions = { title: 'Learn about Props' }
  render() {
    return (
      <View>
        <Text>Props</Text>
      </View>
    );
  }
}

export { Props };
