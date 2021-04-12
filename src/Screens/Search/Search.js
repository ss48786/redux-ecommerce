import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Textinput from '../../Components/Textinput';
import actions from '../../redux/actions';
import types from '../../redux/types';
import colors from '../../styles/colors';
import Button from '../../Components/Button';
import {connect} from 'react-redux';
import {showMessage, errorMessage} from 'react-native-flash-message';
import {color} from 'react-native-reanimated';
import imagePath from '../../constants/imagePath';
import Geolocation from 'react-native-geolocation-service';
import {locationPermission} from '../../utils/permission';
import MyLoader from '../../Components/MyLoader';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';
import store from '../../redux/store';

const{dispatch} =store;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      checkarray: '',
      testarray: '',
      iscorrect: false,
    };
  }

  User_Near = () => {
    const {username, iscorrect} = this.state;
    const {usersearch, data} = this.props;

    console.log(username);

    // let dataSend = {
    //   name: username

    // }
    // console.log(data.accessToken);
    // let headers = {

    //   authorization: data.accessToken

    // }
    actions
      .OnNearUser(username)
      .then(response => {
        let checkarray = [...response.data];
        // console.log("RESPONSE DATA  ", response.data);
        showMessage({
          type: 'success',
          icon: 'success',
          message: 'API HITTED',
        });

        console.log(response, 'THIS IS RESPONSE');

        this.setState({
          checkarray: checkarray,
          iscorrect: false,
        });
      })
      .catch(error => {
        this.setState({
          checkarray: [],
          iscorrect: false,
        });

        console.log(error, ' THIS IS ERROR');
      });
  };
  onNameSearch = text => {
    const {username, checkarray, iscorrect} = this.state;
    this.setState({
      username: text,
      iscorrect: true,
    });
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    } else {
      if (username.length == 0) {
        this.setState({
          checkarray: [],
        });
      }
    }
    this.searchTimeout = setTimeout(() => {
      this.User_Near();
    }, 3000);
  };

  Get_Location = () => {
    const {testarray, iscorrect, isloading} = this.state;
    this.setState({
      iscorrect: true,
    });

    locationPermission()
      .then(response => {
        console.log(response, 'check for response');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position.coords.latitude, 'my testing');
            console.log(position.coords.longitude, 'my testing');
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(long, 'debug long');
            actions
              .OnUserLocation(lat, long)
              .then(response => {
                console.log(response, 'final response');
                let checkarray = [...response.data];
                this.setState({
                  checkarray: checkarray,
                  iscorrect: false,
                  isloading: true,
                });

                showMessage({
                  type: 'success',
                  icon: 'success',
                  message: 'API HITTED',
                });
              })
              .catch(error => {
                this.setState({
                  iscorrect: false,
                });
                console.log(error);
              });
          },

          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  clearUserData=()=>{
    dispatch({
      type:types.LOGOUT,
      
     
    })
  }

  renderItem = ({item}) => {
    return (
      <ScrollView>
        <View style={styles.searchview}>
          <TouchableOpacity>
            {/* <View>
          <Image style={styles.card} source={{
          uri:item.profileImg[0].original 
        }} />
          </View> */}
            <View style={styles.viewlatestdealscard}>
              <Image
                style={styles.card}
                source={{
                  uri: item.profileImg[0].original,
                }}
              />
              <Text style={{fontWeight: 'bold', marginTop: 10}}>
                {item.fullName}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  render() {
    const {username, checkarray, iscorrect, isloading} = this.state;
    // const { data } = this.props;

    return (
      <View style={styles.viewsearchreturn}>
        <View>
          <TouchableOpacity onPress={()=>this.clearUserData()}>
        <Text style={{fontSize: 40, fontFamily: fontFamily.futuraHeavyBt}}>
           Log Out{' '}
          </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column', margin: 20}}>
          <Text style={{fontSize: 40, fontFamily: fontFamily.futuraHeavyBt}}>
            Hi, Sahil{' '}
          </Text>
          <Text style={{fontSize: 40, fontFamily: fontFamily.futuraHeavyBt}}>
            Find your friends{' '}
          </Text>
        </View>
        
        <View style={{position: 'relative'}}>
          <View style={{position: 'absolute'}}>
            <Image
              style={{
                height: 20,
                width: 20,
                marginTop: 40,
                left: 300,
                zIndex: 1,
                top: 5,
              }}
              source={imagePath.search}
            />
          </View>

          <Textinput
            placeholder="Search for name"
            styleofsearch={styles.stylesearch}
            onChangeText={text => this.onNameSearch(text)}
          />
        </View>
        <Button
          buttonName="Search for Location"
          onButtonPress={this.Get_Location}
        />

        <View></View>
        <View style={styles.viewflatlist}>
          <FlatList
            data={checkarray}
            onEndReachedThreshold={0.8}
            showsVerticalScrollIndicator={true}
            numColumns={1}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
            renderItem={this.renderItem}
            bounces={true}
          />
          <MyLoader iscorrect={iscorrect} styleatsearchpage={{marginTop: 50}} />
          {/* <MyLoader iscorrect={iscorrect} styleatsearchpage={{ marginTop:50 }} /> */}
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => {

//   return {

//     // usersearch: state.reducer.usersearch,
//     data: state.reducer.userData,

//   }

// }
//  console.log("data at search page ",data);
// export default connect(mapStateToProps)(Search);
