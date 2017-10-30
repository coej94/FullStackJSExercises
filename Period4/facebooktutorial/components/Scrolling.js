import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

class Scrolling extends Component {
  static navigationOptions = { title: 'Scrolling' };  
  render() {
      return (
        <ScrollView>
          <Text style={{ fontSize: 66 }}>Scroll me plz</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{ fontSize: 66 }}>If you like</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{ fontSize: 66 }}>Scrolling down</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{ fontSize: 66 }}>What's the best</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{ fontSize: 66 }}>Framework around?</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{ fontSize: 70 }}>React Native</Text>
        </ScrollView>
    );
  }
}

export { Scrolling };
