import React from 'react';
import MapView /*, {Marker , {PROVIDER_GOOGLE}}*/ from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../pages/LoadingScreen';

const Map = () => {
  const {hasLocation, initialPosition} = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        //provider={PROVIDER_GOOGLE}  remove if not using Google Maps
        showsUserLocation
        style={{flex: 1}}
        region={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="titulo"
          description="descripcion"
        /> */}
      </MapView>
    </>
  );
};

export default Map;
