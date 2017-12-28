import React from 'react';
import { MapView } from 'expo';

class MapViewer extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 55.683856,
          longitude: 12.574425,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

export { MapViewer };
