import {View, Text} from 'react-native';
import React from 'react';
import MapView /*, {PROVIDER_GOOGLE}*/ from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>MapScreen</Text>
      <MapView
        //provider={PROVIDER_GOOGLE}  remove if not using Google Maps
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default MapScreen;
