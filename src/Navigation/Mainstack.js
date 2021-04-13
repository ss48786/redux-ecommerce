import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabRoutes from "./TabRoutes";
import navigationString from "../constants/navigationString"
import Detailspage from "../Screens/Detailspage/Detailspage";
import Homepage from "../Screens/HomePage/Homepage";
import Cartpage from "../Screens/Cartpage/Cartpage";
import Make_Drawer from "./Drawer";
import GiftedChat from "../Screens/GiftedChat/GiftedChat";
import Chatcard from "../Screens/Chatcard/Chatcard";
import Hooks from "../Screens/Hooks/Hooks";




const Stack=createStackNavigator();

export default function(){


    return(
      <>
      {/* <Stack.Screen
        name={navigationString.TAB_ROUTES}
        options={{
          headerShown:false
        }}
        component={TabRoutes}
      /> */}
<Stack.Screen
        name={navigationString.DRAWER}
        options={{
          headerShown:false
        }}
        component={Make_Drawer}
      /> 



<Stack.Screen
        name={navigationString.DETAILSPAGE}
        options={{
          headerShown:false
        }}
        component={Detailspage}
      />

<Stack.Screen
        name={navigationString.CARTPAGE}
        options={{
          headerShown: false,
        }}
        component={Cartpage}
      />
      <Stack.Screen
        name={navigationString.GIFTEDCHAT}
        options={{
          headerShown: false,
        }}
        component={GiftedChat}
      />
       <Stack.Screen
        name={navigationString.CHATCARD}
        options={{
          headerShown: false,
        }}
        component={Chatcard}
      />
      <Stack.Screen
        name={navigationString.HOOKS}
        options={{
          headerShown: false,
        }}
        component={Hooks}
      />
       
 
      
        </>
    )
  }
