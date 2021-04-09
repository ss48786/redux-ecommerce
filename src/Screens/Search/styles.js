import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import {StyleSheet} from "react-native"
export default StyleSheet.create({
    stylesearch: {
        // borderBottomColor: colors.themeColor,
    
        // borderTopColor: colors.themeColor,
        // borderLeftColor: colors.themeColor,
        // borderRightColor: colors.themeColor,
        borderBottomColor: colors.searchcardcolor,
        marginTop: 30,
        backgroundColor: colors.searchcardcolor,
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
        backgroundColor: colors.searchcardcolor,
        margin: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
      searchview: {
        backgroundColor: colors.searchbackgroundcolor
      },
      viewsearchreturn: {
        backgroundColor: colors.searchbackgroundcolor
      },
      viewflatlist: {
        backgroundColor: colors.searchbackgroundcolor
      }
})