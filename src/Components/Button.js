import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Formbutton(props) {
  const { onButtonPress,  buttonName, text,mytext,style,name,TotalPrice ,textbtn,styleofprofilebutton} = props;
  let check=false;
  return (
    <View style={styles.textInput}>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[styles.buttonStyle, style, styleofprofilebutton]}
      >
        <Text style={[styles.text,textbtn]}>{buttonName}  </Text>
      
        
       
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
   
  
  
  },
  buttonStyle: {
    backgroundColor: "#36b6b0",
    padding: 15,
    width: 320,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    
    
  },
  text:{
    color: "#e3e3e3", fontWeight: "bold"
  }
  

});
