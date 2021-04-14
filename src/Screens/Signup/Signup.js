import React,{useState} from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";

import imagePath from "../../constants/imagePath";

import Button from "../../Components/Button";
import colors from "../../styles/colors";
import Textinput from "../../Components/Textinput";
import { showMessage, errorMessage } from "react-native-flash-message";
import validator from "../../utils/validation"
//  import apis from "../../apis";
// import { LOGIN, SIGNUP } from "../../config/url";
import Homepage from "../HomePage/Homepage";
import navigationString from "../../constants/navigationString";
import TabRoutes from "../../Navigation/TabRoutes";
import actions from "../../redux/actions" ;

import { LOGIN, SIGNUP } from "../../config/url";
import strings from "../../constants/lang";
import styles from "./styles";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();





// export default class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       phoneNumber: '',
     

//     };
//   }

//   // onButtonPress = () => {
//   //   this.props.navigation.navigate(navigationString.LOGIN);
//   // };
//   changeName(key) {

//     return (value) => {
//       this.setState({
//         [key]: value
//       })
//     }

//   }

//   isValidlogin = () => {


//     const { phoneNumber } = this.state;
  
//     const error = validator({ phoneNumber: phoneNumber })
//     if (error) {
//       showMessage({
//         type: "danger",
//         icon: "danger",
//         message: error
//       })
//       return false;
//     }


//     let dataSend = { contactDetails : { countryCode:  "+91", countryCodeISO: "IN" , phoneNo:phoneNumber  } }


//     actions.onSendOTP(dataSend)
//       .then(response => {
//         console.log("response at signup page",response) ;

//         this.props.navigation.navigate(navigationString.LOGIN , {data:response.data.userId })
//         showMessage({
//           type: "success",
//           icon: "success",
//           message: "OTP SENT"
//         })

//       }).catch(error => {
//         console.log(error)

//       });


//   };


//   signIn = async () => {
   
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({ userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };

// // function for google sign out
//   // signOut = async () => {
//   //   try {
//   //     await GoogleSignin.revokeAccess();
//   //     await GoogleSignin.signOut();
//   //     this.setState({ user: null }); // Remember to remove the user from your app's state as well
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   render() {

//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={styles.loginScreen}>
//           <View style={{ flexDirection: 'row', marginBottom: 10 }}>
//             <TouchableOpacity onPress={this.isValidlogin}>
//               <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 10 }}>Sign Up</Text>
//             </TouchableOpacity>
//             {/* <TouchableOpacity onPress={this.isValidlogin}>
//           <Text style={{fontStyle:'bold', fontSize:30, marginLeft:10 }}>Sign Up</Text>
//           </TouchableOpacity> */}
//             <Image style={{ height: 30, width: 30, marginLeft: 'auto', marginRight: 10, marginTop: 10 }} source={imagePath.cancel} />
//           </View>


//         </View>
//         <View style={{ margin: 20 }}>
//           <Text> {strings.YOUR_NUMBER_IS_SAFE_WITH_US_WE_WONT_SHARE_YOUR_DETAILS} </Text>
//         </View>
//         <View>
//           <Text style={{ color: "#36b6b0", margin: 20 }}>  {strings.MOBILE_NUMBER}   </Text>
//         </View>
//         <View>
//           <Textinput
//             placeholder="Mobile number"

//             onChangeText={this.changeName("phoneNumber")} />
//         </View>
//         <View>
//           {/* <Textinput
//             placeholder="Name"

//             onChangeText={this.changeName("firstName")} />
//           <Textinput
//             placeholder="email"

//             onChangeText={this.changeName("email")} /> */}
//         </View>
//         <View>
//           <Button buttonName="Sign Up" onButtonPress={this.isValidlogin} />
//         </View>
//         <View style={{ flexDirection: 'row', margin: 20 }}>
//           <Text> {strings.BY_SIGNING_UP_YOU_AGREE_TO_OUR} </Text>
//           <Text style={{ color: colors.textatsignup }}>{strings.TERMS_CONDITIONS}</Text>

//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//           <Text>{strings.OR}</Text>
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <View style={styles.viewfacebook} >
//             <Button buttonName="Facebook" style={{ width: 150, backgroundColor: 'white', }} textbtn={{ color: "blue" }} />
//           </View>
//           <View style={styles.viewgoogle}>
//             <Button buttonName="Google" onButtonPress={this.signIn} style={{ width: 150, backgroundColor: 'white' }} textbtn={{ color: "red" }} />
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: 'center' }}>
//           <Text>{strings.ALREADY_HAVE_AN_ACCOUNT}</Text>
//           <TouchableOpacity onPress={this.isValidlogin}>
//             <Text style={{ color: colors.textatsignup, marginLeft: 10 }}>{strings.LOG_IN}</Text>
//           </TouchableOpacity>
//         </View>

//       </SafeAreaView>
//     );
//   }
// }







// running code with hooks

const Signup =(props)=>{
  const [state,setState]=useState({
    phoneNumber:""
  });

  const updateState = data => setState(prevState => ({...prevState, ...data}));
   const changeName=(text) =>{

       updateState({
         phoneNumber:text
       })
    
      }
 

       const  isValidlogin = () => {

const {phoneNumber}=state;
  
    const error = validator({ phoneNumber: phoneNumber })
    if (error) {
      showMessage({
        type: "danger",
        icon: "danger",
        message: error
      })
      return false;
    }


    let dataSend = { contactDetails : { countryCode:  "+91", countryCodeISO: "IN" , phoneNo:phoneNumber  } }


    actions.onSendOTP(dataSend)
      .then(response => {
        console.log("response at signup page",response) ;

       props.navigation.navigate(navigationString.LOGIN , {data:response.data.userId })
        showMessage({
          type: "success",
          icon: "success",
          message: "OTP SENT"
        })

      }).catch(error => {
        console.log(error)

      });


  };

     
return(
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.loginScreen}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 10 }}>Sign Up</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={this.isValidlogin}>
          <Text style={{fontStyle:'bold', fontSize:30, marginLeft:10 }}>Sign Up</Text>
          </TouchableOpacity> */}
            <Image style={{ height: 30, width: 30, marginLeft: 'auto', marginRight: 10, marginTop: 10 }} source={imagePath.cancel} />
          </View>


        </View>
        <View style={{ margin: 20 }}>
          <Text> {strings.YOUR_NUMBER_IS_SAFE_WITH_US_WE_WONT_SHARE_YOUR_DETAILS} </Text>
        </View>
        <View>
          <Text style={{ color: "#36b6b0", margin: 20 }}>  {strings.MOBILE_NUMBER}   </Text>
        </View>
        <View>
          <Textinput
            placeholder="Mobile number"

            onChangeText={(text)=>changeName(text)} />
        </View>
        <View>
          {/* <Textinput
            placeholder="Name"

            onChangeText={this.changeName("firstName")} />
          <Textinput
            placeholder="email"

            onChangeText={this.changeName("email")} /> */}
        </View>
        <View>
          <Button buttonName="Sign Up" onButtonPress={()=>isValidlogin()} />
        </View>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Text> {strings.BY_SIGNING_UP_YOU_AGREE_TO_OUR} </Text>
          <Text style={{ color: colors.textatsignup }}>{strings.TERMS_CONDITIONS}</Text>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>{strings.OR}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.viewfacebook} >
            <Button buttonName="Facebook" style={{ width: 150, backgroundColor: 'white', }} textbtn={{ color: "blue" }} />
          </View>
          <View style={styles.viewgoogle}>
            <Button buttonName="Google"  style={{ width: 150, backgroundColor: 'white' }} textbtn={{ color: "red" }} />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
          <Text>{strings.ALREADY_HAVE_AN_ACCOUNT}</Text>
          <TouchableOpacity>
            <Text style={{ color: colors.textatsignup, marginLeft: 10 }}>{strings.LOG_IN}</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
)
}

export default Signup;