import React, { useState } from 'react'
import {View,Text} from "react-native";




 


  const Hooks=()=>{
      const[count,setcount]=useState(0);


      const toggler=()=>{
      
  setcount(count+1)
   }
   

   return(
<View style={{flexDirection:'row',justifyContent:'center', marginTop:200}}>
    
   <Text style={{backgroundColor:'red',fontSize:100}} onPress={()=>toggler()}> {count}</Text>



    {/* {visible&&( <View><Text style={{backgroundColor:'blue'}} onPress={()=>{toggler()}}>prison break</Text></View>)} */}
</View>
   ) 
}
export default Hooks