import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Create a component 

//This is a cleaner, refactored way of creating an app component.
const App = () => ( 
  <View style={{ flex: 1 }}>
    <Header headerText={'Album'} />
    <AlbumList />
  </View>
);

export default App;
