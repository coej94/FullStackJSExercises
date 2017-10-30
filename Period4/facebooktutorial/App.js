import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { StackNavigator } from 'react-navigation';
import { WhatToDo, Basics, Props, State, Style, 
        Touchable, FixedDim, FlexDim, FlexBox } from './components';

//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise - done
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise - done
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: 'center', fontSize: 20 }}>See all Demos implemented by
         Christian Øst-Jacobsen</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics Exercise" />
        <Touchable onPress={() => navigate('props')} title="Props Exercise" />
        <Touchable onPress={() => navigate('states')} title="State Exercise" />
        <Touchable onPress={() => navigate('styles')} title="Styling Exercise" />
        <Touchable onPress={() => navigate('fixed')} title="Fixed Height & Width" />
        <Touchable onPress={() => navigate('flex')} title="Same Ex but I use flex" />
        <Touchable onPress={() => navigate('flexbox')} title="Flexbox Exercise" />
      </View>
    );
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />;

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  states: { screen: State },
  styles: { screen: Style },
  fixed: { screen: FixedDim },
  flex: { screen: FlexDim },
  flexbox: { screen: FlexBox },
});

