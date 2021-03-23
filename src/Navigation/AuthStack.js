import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import navigationString from "../constants/navigationString";
import TabRoutes from "./TabRoutes" ;
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";
import Detailspage from "../Screens/Detailspage/Detailspage"
import Cartpage from "../Screens/Cartpage/Cartpage";
import Homepage from "../Screens/HomePage/Homepage";


const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Fragment>



      <Stack.Screen
        name={navigationString.SIGNUP}
        options={{
          headerShown: false,
        }}
        component={Signup}
      />
      <Stack.Screen
        name={navigationString.LOGIN}
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name={navigationString.TAB_ROUTES}
        options={{
          headerShown: false
        }}
        component={TabRoutes}
      />




    </Fragment>
  );
}

export default AuthStack;
