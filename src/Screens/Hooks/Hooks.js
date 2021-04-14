import React, { useState } from 'react'
import {View,Text} from "react-native";




 


  const Hooks=()=>{
      const[visible,invisible]=useState(false);


      const toggler=()=>{
      
     invisible(!visible)
   }
   

   return(
<View style={{flexDirection:'row',justifyContent:'center', marginTop:200}}>
    
    {!visible&&<Text style={{backgroundColor:'red'}} onPress={()=>toggler()}> welcome to hooks learning</Text>}



    {visible&&( <View><Text style={{backgroundColor:'blue'}} onPress={()=>{toggler()}}>prison break</Text></View>)}
</View>
   ) 
}
export default Hooks