import React, { Component } from 'react';
import { Image } from 'react-native';

class Props extends Component {
  static navigationOptions = { title: 'Learn about Props' }
    render() {
        const pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
          <Image source={pic} style={{ width: 193, height: 110 }} />
        );
    }
}

export { Props };
