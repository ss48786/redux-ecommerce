import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { showMessage } from "react-native-flash-message";
import { connect } from "react-redux";
import MyLoader from "../../Components/MyLoader";
import imagePath from "../../constants/imagePath";
import navigationString from "../../constants/navigationString";
import actions from "../../redux/actions";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";





class GiftedChat extends Component {

  constructor(props) {
    super(props)

    this.state = {
      limit: "10",
      chatarray: [],
      cardarray: [],

    }
  }




  componentDidMount = () => {
    this.HIT_CHAT();
  }
  HIT_CHAT = () => {

    const { skipcount, limit, chatarray } = this.state;
    console.log(skipcount, "at chat pager")

    const { data } = this.props;
    console.log(data, "access token in chat")

    let headers = {

      Authorization: data.accessToken

    }
    actions.GetConversation(limit, headers)
      .then(response => {
        console.log(response, " response in chat function")
        showMessage({
          type: "success",
          icon: "success",
          message: "API HITTED"

        })
        this.setState({
          chatarray: [...response.data]
        })

      }).catch(response => {


      }

      )
  }
  Onchatcard = (item) => {

    const { chatarray, cardarray } = this.state;
    const { navigation } = this.props;

    let newarray=[item]
    

   
    navigation.navigate(navigationString.CHATCARD, { cardarray: newarray }
    )


  }

  renderItem = ({ item }) => {
    // console.log("RENDER ITEM" , item) ;

    return (
      <View>

        <TouchableOpacity onPress={() => this.Onchatcard(item)}>

          {/* <View style={{flexDirection:'row', marginTop:50}}>
              <Text style={styles.textsize}>{item.userInfo.profileImg[0].thumbnail}</Text>
            </View>  */}

          <View style={styles.viewlatestdealscard}>
            <Image style={styles.card} source={{
              uri: item.userInfo.profileImg[0].thumbnail
            }} />
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.userInfo.fullName}</Text>
          </View>

        </TouchableOpacity>



      </View>
    );
  };

  render() {
    const { chatarray , cardarray} = this.state;
    console.log(cardarray, " THIS IS CARDARRAY" ) ;
    return (

      <ScrollView styke={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Button style={{marginTop:20}} onButtonPress={this.onButtonPress}/> */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', marginTop: 30, marginLeft: 10 }}>Abigael Abimaniya</Text>
              <Text style={{ marginTop: 10, marginLeft: 10 }}>Love, life and chill</Text>
            </View>




            <Image source={
              imagePath.dp
            } style={styles.dp} />



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
            // refreshControl={
            //   <RefreshControl
            //     refreshing={refreshing}
            //     onRefresh={this._onRefresh}
            //   />
            // }
            data={chatarray}
            // onEndReachedThreshold={0.8}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={this.renderItem}
            // onEndReached={this.onEndReach}
            bounces={false}
          />
          {/* <Text>{infinitearray[0].bio}</Text> */}
          {/* <MyLoader iscorrect={iscorrect} />
   */}


        </SafeAreaView>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {

  return {
    // newObj:state.reducer.newObj
    // infinitearray: state.reducer.infinitearray,
    data: state.reducer.userData,

  }

}
//  console.log("checking infinitearray",infinitearray);
export default connect(mapStateToProps)(GiftedChat);


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

});




