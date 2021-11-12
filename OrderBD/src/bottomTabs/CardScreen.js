import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';

const CardScreen=()=> {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 23.8223,
          longitude: 90.3654,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default CardScreen;
