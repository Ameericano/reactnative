import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export const PlanetComponents = props => {
  const { image, name, desc, alerttext } = props;
  const openAlert = () => {
    alert(alerttext);
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => openAlert()}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'wheat',
            padding: 16,
            margin: 16,
            borderRadius: 20,
            borderColor: 'green',
            borderWidth: 1,
          }}
        >
          <Image
            source={image}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <View
            style={{
              flex: 1,
              marginLeft: 8,
              marginRight: 8,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 15 }}>{desc}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
