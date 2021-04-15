

import React, { Component } from 'react';
import Routes from './src/Navigation/Routes';
import FlashMessage from "react-native-flash-message";
import { connect } from "react-redux";


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { getUserData } from './src/utils/Utils';
import store from './src/redux/store';
import types from './src/redux/types';
  import SplashScreen from 'react-native-splash-screen';
import {getFCMToken} from "./src/utils/pushNotification"
import socketServices from './src/utils/socketService';







 const {dispatch}=store;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // componentDidMount(){
  //   SplashScreen.hide();
  // }


  componentDidMount() {

    getFCMToken() ;
    getUserData().then((userData) => {

      if (userData) {

        console.log("ASYNC STORAGE SE " , userData) ;

        dispatch({
          type: types.LOGGED_IN,
          payload:  userData 
        })
      }
    }
    )

    SplashScreen.hide();
  }

  // componentDidMount() {
  //   getUserData().then((userData) => {
  //     if (userData) {
  //       dispatch({
  //         type: types.LOGIN,
  //         payload: userData 
  //       })
  //     }
  //   })


  // }

  render() {

    return (

      <Provider store={store}>
        <Routes />
        <FlashMessage position="top" />
      </Provider>

        // <View><Text>hkvhggg</Text></View>
    )
  }
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

