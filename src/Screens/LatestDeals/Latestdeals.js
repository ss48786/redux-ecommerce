import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  RefreshControl


} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import navigationStrings from "../../constants/navigationString";
import Button from "../../Components/Button";
import actions from "../../redux/actions";
import { showMessage, errorMessage } from "react-native-flash-message";
import { connect } from "react-redux";
import MyLoader from "../../Components/MyLoader";
import fontFamily from "../../styles/fontFamily";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import Textinput from "../../Components/Textinput";
import ImageZoom from "react-native-image-pan-zoom";
import { Dimensions } from 'react-native';
import navigationString from "../../constants/navigationString";



class Latestdeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      limit: '',
      skip: '',
      iscorrect: true,
      isloadingMore: false,
      isNoMoreData: false,
      refreshing: false,
      profiles: [],
      islistEnd: false,
      refreshing: false,
      skipcount: 0,
      username: '',


    };
  }
  componentDidMount = () => {
    this.Hit_API();
  }
  onEndReach = () => {
    const { isLoadingMore, isNoMoreData } = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({ isLoadingMore: true });
    this.Hit_API();

  };

  _onRefresh = () => {
    this.setState({ refreshing: false, isNoMoreData: false });
    this.Hit_API();
  };


  Hit_API = (onEndReachCall = false) => {
    const { searchType, limit, skip, iscorrect, isNoMoreData, profiles, skipcount } = this.state;
    const { data, infinitearray } = this.props;
    console.log("COMPONENT DID MOUNT", infinitearray);
    let calculateSkip = onEndReachCall ? skip + profiles.length : 0;
    let dataSend = {


      searchType: "LEADERBOARD",
      limit: "10",
      skip: skipcount

    }

    let header = {

      authorization: data.accessToken

    }
    actions.OnUserSearch(dataSend, header)
      .then(response => {
        //  console.log(response,"latestdeals")
        //  this.props.navigation.navigate(navigationString.LOGIN , {data:response.data.userId })
        let updatedStatevar = {};
        if (response.data.length > 0) {
          let profilesData = onEndReachCall ? [...infinitearray, ...response.data] : response.data;
          updatedStatevar = {
            profiles: profilesData
          };
        }
        else {
          updatedStatevar = {
            islistEnd: true,
            isNoMoreData: true
          }
        }

        showMessage({
          type: "success",
          icon: "success",
          message: "API HITTED"

        })

        this.setState({
          ...updatedStatevar,
          iscorrect: false,
          isloadingMore: false,
          skipcount: skipcount + 5
        })

      }).catch(error => {
        errorMessage({
          type: "danger",
          icon: "danger",
          message: Error
        })
        this.setState({
          iscorrect: false,
          isLoadingMore: false
        })

      });
  };











  renderItem = ({ item }) => {
    // console.log("RENDER ITEM" , item) ;

    return (
      <View>

        <TouchableOpacity>

          {/* <View style={{flexDirection:'row', marginTop:50}}>
            <Text style={styles.textsize}>{item.bio}</Text>
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
    const { infinitearray,navigation } = this.props;
    const { iscorrect, refreshing, username } = this.state;

    console.log("INFINITE ARRAY by sahil  ", infinitearray);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Button style={{marginTop:20}} onButtonPress={this.onButtonPress}/> */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', marginTop: 30, marginLeft: 10 }}>Abigael Abimaniya</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>Love, life and chill</Text>
          </View>


          {/* <Image source={{
          uri:infinitearray[1].profileImg[0].original         
        }} style={styles.dp}/>  */}
          {/* <ImageZoom cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={100}
            imageHeight={100}>
           <Image source={
            imagePath.dp
          } style={styles.dp} />
          </ImageZoom> */}
          <TouchableOpacity onPress={()=>navigation.navigate(navigationString.CHARTS)}>

          <Image source={
            imagePath.dp
          } style={styles.dp} />
          </TouchableOpacity>


        </View>
        <View style={{ position: 'relative' }}>
          {/* <View>
            <Textinput placeholder="Search for name" styleofsearch={styles.stylesearch} onChangeText={(text)=>this.setState({username:text})}/>
          </View>
          <View style={{position:'absolute',marginHorizontal:100}}>
            <Image source={imagePath.search} style={{height:20,width:20}}/>
          </View> */}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Category</Text>
          <Text style={{ marginRight: 10 }}>See all</Text>
        </View>
        <ScrollView horizontal={true} style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Image style={styles.myimage} source={
              imagePath.h5
            } />
            <Image style={styles.myimage} source={
              imagePath.h2
            } />
            <Image style={styles.myimage} source={
              imagePath.h3
            } />
            <Image style={styles.myimage} source={
              imagePath.h4
            } />
            <Image style={styles.myimage} source={
              imagePath.h5
            } />
            <Image style={styles.myimage} source={
              imagePath.h2
            } />
          </View>
        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Friend List</Text>
          <Text style={{ marginRight: 10 }}>See all</Text>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={infinitearray}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={this.renderItem}
          onEndReached={this.onEndReach}
          bounces={false}
        />
        {/* <Text>{infinitearray[0].bio}</Text> */}
        <MyLoader iscorrect={iscorrect} />



      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {

  return {
    // newObj:state.reducer.newObj
    infinitearray: state.reducer.infinitearray,
    data: state.reducer.userData,

  }

}
//  console.log("checking infinitearray",infinitearray);
export default connect(mapStateToProps)(Latestdeals);

const styles = StyleSheet.create({
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
    height: 80,
    width: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10
  },
  textsize: {
    fontFamily: fontFamily.new
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
    backgroundColor: colors.cardcolor,
    margin: 10,
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
    height: 300,
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

});
