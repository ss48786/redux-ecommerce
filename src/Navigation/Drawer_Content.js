
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import navigationString from "../constants/navigationString";
import GiftedChat, { Gifted } from "../Screens/GiftedChat/GiftedChat";
import TabRoutes from "./TabRoutes";







function Drawer_Content(props) {
    const { navigation } = props;
    return (

        <View style={{ flex: 1 }}>
            <View style={{ margin: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationString.LATESTDEALS)}>
                    <Text>
                        Latest Deals
                     </Text>
                </TouchableOpacity>
                
            </View>
            <View style={{margin:30}}>
            <TouchableOpacity onPress={() => navigation.navigate(navigationString.GIFTEDCHAT)}>
                    <Text>
                        GIFTED CHAT
                     </Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}
export default Drawer_Content;