import React from 'react';
import { Image, ScrollView, View } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ScrollView horizontal={true}>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/pikachu.png')}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/flareon.png')}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/rapidash.png')}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{ uri: 'https://i.ibb.co/bLz74hj/psyduck.png' }}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{ uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageScreen;
