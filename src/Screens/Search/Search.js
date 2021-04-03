import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Textinput from "../../Components/Textinput";
import actions from "../../redux/actions";
import types from "../../redux/types";
import colors from "../../styles/colors";
import Button from "../../Components/Button";
import { connect } from "react-redux";
import { showMessage, errorMessage } from "react-native-flash-message";
import { color } from "react-native-reanimated";
import imagePath from "../../constants/imagePath";
import Geolocation from 'react-native-geolocation-service';
import { locationPermission } from "../../utils/permission"







export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      checkarray: '',
      testarray: ''

    }

  }

  User_Near = () => {
    const { username } = this.state;
    const { usersearch, data } = this.props;

    console.log(username);


    // let dataSend = {
    //   name: username

    // }
    // console.log(data.accessToken);
    // let headers = {

    //   authorization: data.accessToken

    // }
    actions.OnNearUser(username)
      .then(response => {
        let checkarray = [...response.data]
        // console.log("RESPONSE DATA  ", response.data);
        showMessage({
          type: "success",
          icon: "success",
          message: "API HITTED"

        })

        console.log(response, "at search page lets checj")

        this.setState({

          checkarray: checkarray

        })

      }).catch(error => {
        errorMessage({
          type: "danger",
          icon: "danger",
          message: Error
        })
        this.setState({
          checkarray: []
        })

        console.log(error)

      });
  };
  onNameSearch = text => {
    const { username, checkarray } = this.state;
    this.setState({
      username: text
    });
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    } else {
      if (username.length == 0) {
        this.setState({
          checkarray: []
        })
      }
    };
    this.searchTimeout = setTimeout(() => {
      this.User_Near();
    }, 500);

  };





  Get_Location = () => {
    const { testarray } = this.state;

    locationPermission()

      .then(response => {


        console.log(response, "check for response");
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position.coords.latitude, "my testing");
            console.log(position.coords.longitude, "my testing");
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(long,"debug long")
            actions.OnUserLocation(lat, long).then(response => {
              console.log(response,"final response")
              let checkarray = [...response.data]
              this.setState({
                checkarray:checkarray
              })

              showMessage({
                type: "success",
                icon: "success",
                message: "API HITTED"
      
              })
            }).catch(error => {

            })

           }
             
    
        ,(error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
  }).catch(error => {
    console.log(error, );
      })
    }

  



renderItem = ({ item }) => {


  return (
    <View style={styles.searchview}>

      <TouchableOpacity>

        {/* <View>
          <Image style={styles.card} source={{
          uri:item.profileImg[0].original 
        }} />
          </View> */}
        <View style={styles.viewlatestdealscard}>
          <Image style={styles.card} source={{
            uri: item.profileImg[0].original
          }} />
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.fullName}</Text>
        </View>



      </TouchableOpacity>



    </View>
  );
};







render() {
  const { username, checkarray } = this.state;
  // const { data } = this.props;

  return (
    <View style={styles.viewsearchreturn}>
      <View style={{ flexDirection: 'column', margin: 20 }}>

        <Text style={{ fontSize: 40, fontWeight: '700' }}>Hi, Sahil </Text>
        <Text style={{ fontSize: 40, fontWeight: '700' }}>Find your friends </Text>
      </View>
      <View stylw={{ position: 'relative' }}>
        <View style={{ position: 'absolute' }}>
          <Image style={{ height: 20, width: 20, marginTop: 40, left: 300, zIndex: 1, top: 5, }} source={imagePath.search} />
        </View>

        <Textinput placeholder="Search for name" styleofsearch={styles.stylesearch} onChangeText={(text) => this.onNameSearch(text)} />
      </View>
      <Button buttonName="Search for Location" onButtonPress={this.Get_Location} />

      <View>


      </View>
      <View style={styles.viewflatlist}>
        <FlatList
          data={checkarray}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={this.renderItem}

          bounces={false}
        />
        
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

const styles = StyleSheet.create({
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
