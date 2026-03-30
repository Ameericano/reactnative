import React from 'react';
import { View, Text } from 'react-native';
import {FontAwesome} from '@react-native-vector-icons/fontawesome';

const InstagramHomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text
                    style={{
                      fontFamily: 'StyleScript-Regular',  
                      fontSize: 40, marginLeft: 16
                    }}>
                    Instagram
                </Text>
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center', marginRight: 8
                }}>
                    <View style={{ margin: 8 }}>
                        <FontAwesome name='heart' size={26}
                        />
                    </View>
                </View>
            </View>
        </View >
    )
};

export default InstagramHomeScreen;