import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { InputComponent } from '../components/InputComponent';

const FourthScreen = () => {
  return (
    <ScrollView>
      <View style={{ margin: 16 }}>
        <ImageBackground
          style={{
            width: '100%',
            height: 300,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            opacity: 1,
          }}
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg' }}
        >
          <Text
            style={{
              backgroundColor: 'mistyrose',
              padding: 8,
              margin: 8,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            DisneyLand
          </Text>
        </ImageBackground>
        <InputComponent
          title="Description"
          height={140}
          placeholder="About the Place"
          multiline={true}
          keyboardType="default"
        />
        <InputComponent
          title="Phone Number"
          height={40}
          placeholder="Phone Number"
          multiline={true}
          keyboardType="phone-pad"
        />
        
        <InputComponent
          title="Location"
          height={40}
          placeholder="Location"
          multiline={true}
          keyboardType="default"
        />
      </View>
    </ScrollView>
  );
};

export default FourthScreen;
