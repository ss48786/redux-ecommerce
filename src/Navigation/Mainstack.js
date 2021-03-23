import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabRoutes from "./TabRoutes";
import navigationString from "../constants/navigationString"
import Detailspage from "../Screens/Detailspage/Detailspage";
import Homepage from "../Screens/HomePage/Homepage";
import Cartpage from "../Screens/Cartpage/Cartpage";
const Stack=createStackNavigator();

export default function(){


    return(
      <>
      <Stack.Screen
        name={navigationString.TAB_ROUTES}
        options={{
          headerShown:false
        }}
        component={TabRoutes}
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
 
      
        </>
    )
  }
