import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import {Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';
const app = () => {
  return(
    //Når appen starter, laver redux en store
    //Ved hjælp af librariet reducer. Reduceren, returnerer
    //så et array med objects.
    
    //Denne provider holder så på denne store.
    //Provideren er et en react component som etablerer
    //forbindelsen mellem react og redux.
    <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <Header headerText="TechStack"/>
        <LibraryList />
      </View>
    </Provider >
  );
}

export default app;