import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateVerticalScale} from "../../styles/responsiveSize";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
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
    card: {
        height:moderateVerticalScale(80),
        width:moderateScale(80),
        // height: 80,
        // width: 80,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        margin: 10
    },
    textsize: {
        fontFamily: fontFamily.new
    },

    viewlatestdealscard: {
        flexDirection: 'row',
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

         elevation: 2,
        // justifyContent: "space-between", 
        // margin: 10,
        backgroundColor: colors.cardcolor,
        // margin: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },


    dp: {
        height: 100,

        width: 100,
        margin: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    myimage: {
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
    stylesearch: {
        borderBottomColor: colors.themeColor,

        borderTopColor: colors.themeColor,
        borderLeftColor: colors.themeColor,
        borderRightColor: colors.themeColor,
    },

})
