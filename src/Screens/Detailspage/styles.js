import {StyleSheet} from "react";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
export default StyleSheet.create({
    loginScreen: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop:20
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
      card: {
        height: 300,
        width: 160,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
      buttonStyle: {
        backgroundColor: "#f2288c",
        padding: 10,
        width: 100,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
       marginLeft:40,
       marginTop:10
      },
})