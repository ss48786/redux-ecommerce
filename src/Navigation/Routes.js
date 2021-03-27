import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainStack from "./Mainstack";
import AuthStack from "./AuthStack";
import FlashMessage from "react-native-flash-message";
import { connect } from "react-redux";

const Stack = createStackNavigator();


function Routes(props) {
  const { isLoggedin, data } = props;

  console.log("DATA ACCESS TOKEN jhgjhv----" , !!data.accessToken) ;

  console.log("ROUTES----------------------------------" , data)
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {!!data.accessToken?<>{MainStack()}</>:<>{AuthStack()}</>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const mapStateToProps = (state) => {
  return {
    isLoggedin: state.reducer.isLoggedin,
    data: state.reducer.userData
  }

}

export default connect(mapStateToProps)(Routes);