import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PlanetComponents } from '../components/PlanetComponents';

const SolarSystemScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'serif',
            textDecorationLine: 'underline',
          }}
        >
          Solar System
        </Text>
      </View>
      <ScrollView>
        <PlanetComponents
          name="Mercury"
          desc="Mercury is the fastest planet, zipping around the sun every 88 earth day"
          image={require('../../assets/images/mercury.png')}
          alerttext="You opened mercury!"
        />
        <PlanetComponents
          name="Venus"
          desc="Venus spins slowly in the opposite direction from most planets"
          image={require('../../assets/images/venus.png')}
          alerttext="You opened venus!"
        />
        <PlanetComponents
          name="Earth"
          desc="Earth is the only place we know of so far that's inhabited by living thing"
          image={require('../../assets/images/earth.png')}
          alerttext="You opened earth!"
        />
        <PlanetComponents
          name="Mars"
          desc="Mars is a dusty, cold, desert world with a very thin atmosphere"
          image={require('../../assets/images/mars.png')}
          alerttext="You opened mars!"
        />
        <PlanetComponents
          name="Jupiter"
          desc="Jupiter is more than twice as massive than the other planets of our solar system combined"
          image={require('../../assets/images/jupiter.png')}
          alerttext="You opened jupiter!"
        />
        <PlanetComponents
          name="Saturn"
          desc="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system"
          image={require('../../assets/images/saturn.png')}
          alerttext="You opened saturn!"
        />
        <PlanetComponents
          name="Uranus"
          desc="Uranus rotates at a nearly 90-degree angle from the planet of its orbit"
          image={require('../../assets/images/uranus.png')}
          alerttext="You opened uranus!"
        />
        <PlanetComponents
          name="Neptune"
          desc="Neptune is dark, cold, and whipped by supersonic winds"
          image={require('../../assets/images/neptune.png')}
          alerttext="You opened neptune!"
        />
      </ScrollView>
    </View>
  );
};

export default SolarSystemScreen;
