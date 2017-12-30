import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import {Header } from './src/components/common';
const app = () => {
  return(
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="TechStack"/>
        <Text>PEEEEENIS</Text>
      </View>
    </Provider >
  );
}

export default app;