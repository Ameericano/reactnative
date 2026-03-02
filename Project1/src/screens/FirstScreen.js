import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const FirstScreen = () => {
  
  const openAlert = () => {
    alert("You Clicked the Button!");
  };

  return (

    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
      }}>

      <Text style={{margin:16}}>

        Hello 

        <Text style = {{color:'red'}}> World</Text> !
        
      </Text>
      <Button
       title = "This is a button"
       onPress={openAlert}
       />

    </View>
  );
};


export default FirstScreen;
