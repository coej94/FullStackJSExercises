import React, { Component } from 'react';
import { Button, Platform, Text, TextInput, View, StyleSheet } from 'react-native';
import { Constants, Location, MapView, Permissions } from 'expo';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class App extends Component {

  state = {
    userName: "",
    distance: 0,
    location: null,
    friends: [],
    errorMessage: null,
  };

  componentDidMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.changeLocation);
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  changeLocation = (location) => {
    temp = {
      longitude: location.longitude,
      latitude: location.latitude,
    },
      this.setState({ location, temp })
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let temp = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    location = await Location.reverseGeocodeAsync(temp);
    this.setState({ location });
  };

  getFriends = () => {
    return fetch("http://localhost:3000/api/friends/register/" + this.state.distance, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: this.state.userName,
        loc: {
          type: 'Point',
          coordinates: [this.state.location.longitude, this.state.location.latitude]
        }
      })
    })
      .then((res) => res.json())
      .then((JSONres) => {
        this.setState({ friends: JSONres })
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 10 }}
          showsUserLocation={true}
        >
          {this.state.friends.map(marker => (
            <MapView.Marker
              key={person.userName}
              coordinates={{
                latitude: person.location.coordinates[0],
                longitude: person.location.coordinates[1]
              }}
              title={person.userName}
            />
          ))}
        </MapView>
        <TextInput style={{ flex: 1 }} placeholder="User name"
          onChangeText={(userName) => this.setState({ userName })} >
        </TextInput>
        <TextInput style={{ flex: 1 }} placeholder="Range in km"
          onChangeText={(distance) => this.setState({ distance })} >
        </TextInput>
        <Button title='Search'
          onPress={() => this.getFriends()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});