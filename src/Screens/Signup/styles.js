import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
export default StyleSheet.create({
    loginScreen: {

        backgroundColor: "#ffffff",
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    
        elevation: 5,
        borderColor: "white"
    
    
    
    
    
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
      viewfacebook: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
        borderWidth: 1,
        marginLeft: 20,
        borderColor: 'blue',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      },
      viewgoogle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
        borderWidth: 1,
        marginRight: 20, borderColor: 'red',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }
})