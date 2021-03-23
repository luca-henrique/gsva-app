import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import MapView from 'react-native-maps';
import Pulse from 'react-native-pulse';

const HomeMap = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -8.41889,
          longitude: -37.05389,
          latitudeDelta: 0.1,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default HomeMap;
