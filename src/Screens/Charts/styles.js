import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
export default StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
      container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
      },
})