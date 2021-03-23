import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity
  } from "react-native";
  import { ScrollView } from "react-native-gesture-handler";
  import navigationStrings from "../../constants/navigationString";
  export default class Latestdeals extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
  
    onButtonPress = () => {
      this.props.navigation.navigate(navigationStrings.TAB_ROUTES);
    };
  
    render() {
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.loginScreen}>
            <Text>check for Latest deals</Text>
          </View>
        </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    loginScreen: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    forFlex: {
      flex: 0.4,
      justifyContent: "center",
      alignItems: "center",
    },
    ajioLogo: {
      width: 80,
      height: 80,
    },
    fbLogo: {
      width: 20,
      height: 20,
    },
    googleLogo: {
      width: 30,
      height: 30,
    },
    forForm: {
      flex: 0.6,
      alignItems: "center",
    },
    orThing: {
      flexDirection: "row",
    },
    buttonStyle: {
      borderWidth: 1,
      padding: 15,
      width: 250,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    fbbuttonStyle: {
      borderWidth: 1,
      padding: 15,
      width: 250,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 10,
    },
    googlebuttonStyle: {
      borderWidth: 1,
      padding: 10,
      width: 250,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 10,
    },
  });
  