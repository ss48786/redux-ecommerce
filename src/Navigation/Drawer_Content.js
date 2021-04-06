
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import navigationString from "../constants/navigationString";
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

        </View>


    )
}
export default Drawer_Content;