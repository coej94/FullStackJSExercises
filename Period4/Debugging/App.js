import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {value: 100};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Christian debugger verden!</Text>
        <Button title="Call Add" onPress={() => this.get(this.state.value)}/>
        <Text>{this.state.value}</Text>
      </View>
    );
  }

  adder = (start) => {
    let value = start;
    value += 1;
    value += 2;
    value += 3;
    this.setState({value});
  }

  get = () => {
    return fetch('http://ffb2ced6.ngrok.io/api/movies')
    .then((response) => response.json())
    .then((res) => {
      return this.setState({value: res.title})
    }).catch((error) => {
      console.error(error);
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc9000',
    alignItems: 'center',
    justifyContent: 'center',
  }, textStyle: {
    fontSize: 30
  }
});
