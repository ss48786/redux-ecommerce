import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Homepage from "../Screens/HomePage/Homepage";
import Latestdeals from "../Screens/LatestDeals/Latestdeals";
import Profile from "../Screens/Profile/Profile";
import Search from "../Screens/Search/Search";
import Charts from "../Screens/Charts/Charts"
import navigationString from "../constants/navigationString";






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
          name={navigationString.LATESTDEALS}
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
         <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "search",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-offer" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Charts"
          component={Charts}
          options={{
            tabBarLabel: "Charts",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-offer" color={color} size={size} />
            ),
          }}
        />
        
        
       
      </Tab.Navigator>
    );
  }
  
  export default TabRoutes;
  