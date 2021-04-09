import {StyleSheet} from "react-native";
import colors from "./colors";
import fontFamily from "./fontFamily";
export default StyleSheet.create({
    viewlatestdealscard: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
        // justifyContent: "space-between", 
        margin: 10,
        backgroundColor: colors.cardcolor,
        margin: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
      card: {
        height: 80,
        width: 80,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        margin: 10
      },
      myimagescarousel: {
        height: 150,
        //  aspectRatio:1,
        width: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 10,
        //  resizeMode:'contain',
        // overflow:'hidden',
        // flexWrap:'wrap'
    
      },
})