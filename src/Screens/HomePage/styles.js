import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import {
    moderateVerticalScale,
    moderateScale,
  } from '../../styles/responsiveSize';


export default  StyleSheet.create({
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
    // buttonStyle: {
    //   borderWidth: 1,
    //   padding: 15,
    //   width: 250,
    //   borderRadius: 8,
    //   flexDirection: "row",
    //   justifyContent: "space-around",
    // },
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
    forlogoHeading: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    imageStyle: {
      height: 25,
      width: 25,
      marginBottom: 20,
      margin: 10,
    },
    textInput: {
      flexDirection: "row",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      width: 300,
      maxHeight: 50,
      borderRadius: 12,
      marginLeft: 32,
    },
    inputField: {
      padding: 8,
    },
    header: {
      flex: 2,
      backgroundColor: "#f0f4f7",
      justifyContent: "space-around",
    },
    myimage: {
      height: 120,
      width: 100,
      borderRadius:100
      
     
    },
    card: {
     height:moderateVerticalScale(300),
     width:moderateScale(160),

    //   height: 300,
    //   width: 160,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    overflow:'hidden'
     
    },
    buttonStyle: {
      backgroundColor: colors.themeColor,
      padding: 10,
      width: 100,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
     marginLeft:40,
     marginTop:10
    },
    styleofhomepageinputtext:{

    }
  });
  