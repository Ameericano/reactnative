import React from 'react';
import { Text, View } from 'react-native';


const ThirdScreen = () => {
    return(
        <View style = {{
            flex: 1,
            backgroundColor: "mistyrose",
            flexDirection: "row"
        }}>
            <View style = {{
                backgroundColor: "red",
                flex: 1
            }}>
                <Text style = {{
                    color : "white"
                }}>
                    Pikachu
                </Text>
            </View>
            <View style = {{
                backgroundColor: "orange",
                flex: 1
            }}>
                <Text>
                    Flareon
                </Text>
            </View>
            <View style = {{
                backgroundColor: "yellow",
                flex: 1
            }}>
                <Text>
                    Rapidash
                </Text>
            </View>
        </View>
    )
}

export default ThirdScreen