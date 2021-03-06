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
import Loader from "../../Components/Loader";
import fontFamily from "../../styles/fontFamily";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import Textinput from "../../Components/Textinput";
import ImageZoom from "react-native-image-pan-zoom";
import { Dimensions } from 'react-native';
import navigationString from "../../constants/navigationString";
import styles from "./styles";
import commonStyles from "../../styles/commonStyles";






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
    console.log("RENDER ITEM", item);

    return (
      <View>

        <TouchableOpacity>

          {/* <View style={{flexDirection:'row', marginTop:50}}>
            <Text style={styles.textsize}>{item.bio}</Text>
          </View> */}
          <View style={commonStyles.viewlatestdealscard}>
            <Image style={commonStyles.card} source={{
              uri: item.profileImg[0].original
            }} />
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.fullName}</Text>
          </View>

        </TouchableOpacity>



      </View>
    );
  };
  render() {
    const { infinitearray, navigation } = this.props;
    const { iscorrect, refreshing, username } = this.state;

   

    return (
      // <ScrollView style={{flex:1}}>
      <SafeAreaView style={{ flex: 1}}>
        {/* <Button style={{marginTop:20}} onButtonPress={this.onButtonPress}/> */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', marginTop: 30, marginLeft: 10,fontSize:20 }}>Abigael Abimaniya</Text>
            <Text style={{ marginTop: 10, marginLeft: 10,fontFamily:fontFamily.futuraBtHeavy,fontSize:15 }}>Love, life and chill</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate(navigationString.CHARTS)}>

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
        <View>
        <ScrollView horizontal={true} style={{ marginBottom: 10, }} showsHorizontalScrollIndicator={false}
        >
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Image style={commonStyles.myimagescarousel} source={
              imagePath.h5
            } />
            <Image style={commonStyles.myimagescarousel} source={
              imagePath.h2
            } />
            <Image style={commonStyles.myimagescarousel} source={
              imagePath.h3
            } />
            <Image style={commonStyles.myimagescarousel} source={
              imagePath.h4
            } />
            <Image style={commonStyles.myimagescarousel} source={
              imagePath.h5
            } />
            <Image style={commonStyles.myimagescarousel} source={
              imagePath.h2
            } />
          </View>
        </ScrollView>
        </View>
        

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
        <Loader iscorrect={iscorrect} />



      </SafeAreaView>
      // </ScrollView>
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

