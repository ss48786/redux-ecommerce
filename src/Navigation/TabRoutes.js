import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Homepage from "../Screens/HomePage/Homepage";
import Latestdeals from "../Screens/LatestDeals/Latestdeals";
import Profile from "../Screens/Profile/Profile";




const Tab = createBottomTabNavigator();
function TabRoutes() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Homepage"
          component={Homepage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Latest Deals"
          component={Latestdeals}
          options={{
            tabBarLabel: "Deals",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-offer" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-offer" color={color} size={size} />
            ),
          }}
        />
        
        
       
      </Tab.Navigator>
    );
  }
  
  export default TabRoutes;
  