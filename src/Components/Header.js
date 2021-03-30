
import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
  
} from "react-native";
import { connect } from "react-redux";
import imagePath from "../constants/imagePath";
import store from "../redux/store";
import colors from "../styles/colors";
import Textinput from "./Textinput";




 function Header(props) {
    const { style, placeholder, onChangeText, number,styleofhomepageinputtext,checkCart} = props;
 
  return (
   <View>
       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image style={styles.imageStyle} source={imagePath.m1} />
          <Image style={{height: 25,
      width: 100,
      marginBottom: 20,
      margin: 10,}} source={imagePath.dp1} />

          <View style={{ flexDirection: "row" }}>
           
            {/* <TouchableOpacity onPress={this.checkCart}>
              <Image style={styles.imageStyle} source={imagePath.m5} />
            </TouchableOpacity> */}
             <TouchableOpacity>
              <Image style={styles.imageStyle} source={imagePath.m5} />
            </TouchableOpacity>
            {/* <Text
              style={{
                color: colors.themecolor,
                marginLeft: -8,
                marginTop: 2,
                marginRight: 3,
              }}
            >
           {count}
            </Text> */}
          </View>
        </View>
        <Textinput styleofhomepageinputtext={{borderBottomColor:colors.themecolor , 
    borderTopColor:colors.themecolor, 
   borderLeftColor:colors.themecolor,
    borderRightColor:colors.themecolor}} placeholder="Search for products and brands"/>
   </View>
  );
}
const mapStateToProps=state=>{
  return{
    newAry:state.newAry
  }

  }
export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
   textinput:{ borderWidth:1, 
   borderBottomColor:colors.themecolor , 
    borderTopColor:'white', 
   borderLeftColor:'white',
    borderRightColor:'white',
    margin:20,

   },
   imageStyle: {
    height: 25,
    width: 25,
    marginBottom: 20,
    margin: 10,
  },

});