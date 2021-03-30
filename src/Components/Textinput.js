import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
  
} from "react-native";
import colors from "../styles/colors";

export default function Textinput(props) {
    const { style, placeholder, onChangeText, number,styleofhomepageinputtext} = props;
 
  return (
   <View>
       <TextInput style={[styles.textinput,styleofhomepageinputtext]}
     placeholder={placeholder}
     onChangeText={onChangeText}
       />
   </View>
  );
}

const styles = StyleSheet.create({
   textinput:{ borderWidth:1, 
   borderBottomColor:colors.themecolor , 
    borderTopColor:'white', 
   borderLeftColor:'white',
    borderRightColor:'white',
    margin:20,

   }

});
