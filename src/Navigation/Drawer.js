import React,{Component} from "react";
import {Text,View} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from "./TabRoutes";
import navigationString from "../constants/navigationString";
import { createStackNavigator } from "@react-navigation/stack";
import Detailspage from "../Screens/Detailspage/Detailspage";
import Cartpage from "../Screens/Cartpage/Cartpage";
import Drawer_Content from "../Components/Drawer_Content";
import { NavigationContainer } from "@react-navigation/native";


const Stack=createStackNavigator();



const Drawer = createDrawerNavigator();
function Make_Drawer(props){
const {}=props;

    return(
      <>
     
        <Drawer.Navigator 
        drawerContent = {(props)=><Drawer_Content {...props}/>}
        >
          <Drawer.Screen name={navigationString.TAB_ROUTES} component={TabRoutes} />

         
        </Drawer.Navigator>

        {/* <Stack.Screen
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
      /> */}

      

      
 
      
        </>
    )
  }
  export default Make_Drawer;