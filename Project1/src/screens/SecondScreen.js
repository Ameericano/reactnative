import React from "react";
import { Text, TouchableOpacity, View } from "react-native";



const SecondScreen = () => {
    
    const openAlert = (game) => {
        if (game === 'mobileLegends') {
            alert("You Chose Mobile Legends!")
        } else if (game === 'pubg') {
            alert("You Chose PUBG!")
        }
    }

    return (
        <View style = {{
            flex:1,
            backgroundColor: "lavender",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <View style = {{
                backgroundColor: "skyblue",
                borderStyle: "dashed",
                borderWidth : 2,
                padding : 10,
                marginBottom: 10,
                borderRadius: 10
            }}>
                <Text style = {{
                    color: "blue",
                    fontFamily: "serif",
                    fontSize: 14,
                    textAlign: "center"
                }}>
                    Mobile Legends 
                </Text>
                <Text>Mobile Legends is a multiplayer online battle arena (MOBA) game. The two opposing teams fight to reach and destroy the enemy's base while defending their own base for control of a path.</Text>
            </View>
            <View>
                <TouchableOpacity style = {{
                    backgroundColor: "white",
                    padding:8,
                    margin:8,
                    borderRadius:50,
                    borderWidth:2,
                    
                }}
                onPress={() => openAlert('mobileLegends')}
                >
                <Text style = {{
                    color: "lightcoral"
                }}>Mobile Legends Button!</Text>

                </TouchableOpacity>
            </View>
            <View style = {{
                backgroundColor: "cornflowerblue",
                borderStyle: "solid",
                borderWidth : 1,
                borderColor : "red",
                padding : 10,
                marginTop : 10,
                borderRadius: 10
            }}>
                <Text style = {{
                    textAlign:"center",
                    fontFamily:"serif",
                    fontSize:14,
                    color: "red"
                }}>
                    PUBG
                </Text>
                <Text>PlayerUnknown's Battlegrounds, better known as PUBG, is a multiplayer battle royale game in which players drop onto an island and fight to be the last one left standing.</Text>
            </View>
            <View>
                <TouchableOpacity style = {{
                    backgroundColor: "white",
                    padding:8,
                    margin:8,
                    borderRadius:50,
                    borderWidth:2,
                    
                }}
                onPress={() => openAlert('pubg')}
                >
                <Text style = {{
                    color: "lightcoral"
                }}>PUBG Button!</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecondScreen;