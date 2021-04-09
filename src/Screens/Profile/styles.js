import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
export default StyleSheet.create({
    profile:{
        height:150,
        width:150,
        marginLeft:110,
        marginTop:50
            },
            cameraset: {
                height: 50,
                width: 50,
                margin: 10,
              },
              styleofprofilebutton:{
                  width:200,
                  marginTop:30
              },
              button: {
                borderRadius: 20,
                padding: 10,
                elevation: 2
              },
              buttonOpen: {
                backgroundColor: "#F194FF",
              },
              buttonClose: {
                backgroundColor: "#2196F3",
              },
              themebutton:{
                width:120,
            
                padding:30,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                
              },
              viewflatlisttheme:{
                flexDirection: "row", 
                justifyContent: "center",
                 marginTop:10,
        
              }
              
})