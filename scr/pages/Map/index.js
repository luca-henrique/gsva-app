import React, { useState, useEffect } from 'react';

import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Chat from '../../assets/icons/chat.png';

import MapView from 'react-native-maps';

const HomeMap = ({ navigator }) => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition((info) =>
      setPosition({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      }),
    );
    setLoading(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading === true ? (
        <View>
          <Text>Teste</Text>
        </View>
      ) : (
          <View style={{ flex: 1 }}>
            <MapView
              style={{ flex: 1 }}
              region={position}
              showsUserLocation
              loadingEnabled
            />
            <View
              style={{
                position: 'absolute',
                bottom: '90%',
                left: '85%',
              }}>
              <TouchableOpacity>
                <Image source={Chat} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 40,
                alignItems: 'center',
                alignContent: 'center',
                width: '100%',
                height: '10%',
              }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>SOS</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: '20%',
    height: '100%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  textButton: {
    color: 'white',
    fontSize: 22,
  },
});

export default HomeMap;
