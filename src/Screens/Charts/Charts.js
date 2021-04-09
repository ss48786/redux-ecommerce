'use strict';
import React, {Component} from 'react';
import {AreaChart, Grid} from 'react-native-svg-charts';
import {
  Text,
  View,
  AppRegistry,
  Linking,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import * as shape from 'd3-shape';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import strings from '../../constants/lang';
import styles from './styles';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      text: 'Imagine,Believe & Acheive ',
    };
  }
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    const {mydata} = this.state;
    console.log(mydata, 'at charts page');
    return (
      <ScrollView style={{flex: 1}}>
        <View>
          <Text>welcome to charts page</Text>
          <AreaChart
            style={{height: 200}}
            data={mydata}
            contentInset={{top: 30, bottom: 30}}
            curve={shape.curveNatural}
            svg={{fill: 'red'}}>
            <Grid />
          </AreaChart>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <QRCode value="Qr check " />
          </View>

          <View>
            <QRCodeScanner
              onRead={this.onSuccess}
              flashMode={RNCamera.Constants.FlashMode.auto}
              topContent={
                <Text style={styles.centerText}>
                  Go to{' '}
                  <Text style={styles.textBold}>
                    wikipedia.org/wiki/QR_code
                  </Text>{' '}
                  on your computer and scan the QR code.
                </Text>
              }
              bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                  <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}


export default Charts;

// // import React from 'react'
// // import { AreaChart, Grid } from 'react-native-svg-charts'
// // import * as shape from 'd3-shape'

// // class Charts extends React.PureComponent {
// //     render() {
// //         const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

// //         return (
// //             <AreaChart
// //                 style={{ height: 200 }}
// //                 data={data}
// //                 contentInset={{ top: 30, bottom: 30 }}
// //                 curve={shape.curveNatural}
// //                 svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
// //             >
// //                 <Grid />
// //             </AreaChart>
// //         )
// //     }
// // }
// // export default Charts;

//  import React,{Component} from "react";
// import {Text,View} from "react-native"

// class Charts extends Component {
//     constructor(props){
// super(props);
// this.state={

// }
//     }
//     render(){
//         return(

//             <View>
//                 <Text>welcome to charts</Text>
//             </View>

//         )
//     }
// }
// export default Charts ;
