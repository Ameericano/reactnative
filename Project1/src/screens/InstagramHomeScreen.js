import React from 'react';
import { View, Text } from 'react-native';
import {FontAwesome} from '@react-native-vector-icons/fontawesome';
import Ionicons from '@react-native-vector-icons/ionicons';
import { ScrollView } from 'react-native';
import { Feed } from '../components/InstagramComponent';

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
                        <FontAwesome name='plus-square-o' size={26}
                        />
                    </View>
                     <View style={{ margin: 8 }}>
                        <FontAwesome name='heart-o' size={26}
                        />
                    </View>
                    <View style={{ margin: 8 }}>
                        <Ionicons name='paper-plane-outline' size={26}
                        />
                    </View>
                </View>
            </View>
            <ScrollView>
                <Feed
                    profile = {require("../../assets/images/mypfp.jpg")}
                    username = "frosted_ameericano"
                    post = {require("../../assets/images/postPic.jpg")}
                />
                <Feed
                    profile = {require("../../assets/images/profilePicture1.png")}
                    username = "sxchin"
                    post = {require("../../assets/images/post2.jpg")}
                />
                <Feed
                    profile = {require("../../assets/images/profilePicture2.png")}
                    username = "emilia_10"
                    post = {require("../../assets/images/post3.jpg")}
                />
                <Feed
                    profile = {require("../../assets/images/profilePicture3.png")}
                    username = "yugz24"
                    post = {require("../../assets/images/post4.jpg")}
                />
            </ScrollView>
        </View >
    )
};

export default InstagramHomeScreen;