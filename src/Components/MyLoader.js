import React from "react";
import {Text, View,ActivityIndicator,StyleSheet} from "react-native";
 function MyLoader({iscorrect}) {
    if (iscorrect) {
        return (
            
                <View style={[styles.container, styles.horizontal]}>
                   
                    <ActivityIndicator size="large" color="#0000ff" />
                   
                </View>
        
        )
    }
    return(
        <View></View>
    )

}

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
      flex: 1,
      justifyContent: "center",
      position:"absolute",
      backgroundColor:"rgba(0,0,0,0.3)",
      flexDirection: "row",
      justifyContent: "space-around",
      
    width:"100%",
    height:"100%",
    
     
    //   bottom:400
      
    },
   
  });

  export default MyLoader;