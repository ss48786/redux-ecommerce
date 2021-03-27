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
    
 
  } from "react-native";
  import { ScrollView } from "react-native-gesture-handler";
  import navigationStrings from "../../constants/navigationString";
 import Button from "../../Components/Button";
import actions from "../../redux/actions";
import { showMessage,errorMessage } from "react-native-flash-message";
import { connect } from "react-redux";
 import MyLoader from "../../Components/MyLoader";
import fontFamily from "../../styles/fontFamily";

 





 
 class Latestdeals extends Component {
    constructor(props) {
      super(props);
      this.state = {
       searchType:'',
       limit:'',
       skip:'',
      iscorrect:true


      };
    }
  componentDidMount=()=>{
    const {searchType,limit, skip, iscorrect} = this.state;
      const {data,infinitearray} =this.props;
      console.log("COMPONENT DID MOUNT" , infinitearray) ;
      let dataSend = {  
       
	
        searchType:"LEADERBOARD",
        limit:"10",
        skip:"0"
        
      }

      let header ={
        
        authorization:data.accessToken

      }
      actions.OnUserSearch(dataSend,header)
        .then(response => {
           
          //  this.props.navigation.navigate(navigationString.LOGIN , {data:response.data.userId })
          // showMessage({
          //   type: "success",
          //   icon: "success",
          //   message: "API HITTED"

          // })
          this.setState({
            iscorrect:false
          })
  
        }).catch(error => {
          errorMessage({
            type: "danger",
            icon: "danger",
            message: Error
          })
          // this.setState({
          //   isvalid:true
          // })
          
  
        });
  };
    
  renderItem = ({item}) => {
      console.log("RENDER ITEM" , item) ;
    
    return (
      <View>
      <TouchableOpacity>
      
      <View style={{flexDirection:'row', marginTop:50}}>
            <Text style={styles.textsize}>{item.bio}</Text>
          </View>
          <View style={{ justifyContent: "space-between", margin: 10 }}>
        <Image style={styles.card} source={{
          uri:item.profileImg[0].original 
        }} />
      </View>

</TouchableOpacity>
     
        
   
    </View>
    );
  };
    render() {
      const {infinitearray}=this.props;
      const{iscorrect} = this.state;

      console.log("INFINITE ARRAY " , infinitearray ) ;
   
      return (
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Button style={{marginTop:20}} onButtonPress={this.onButtonPress}/> */}
          {/* <View style={{flexDirection:'row', marginTop:50}}>
            <Text>{infinitearray[0].bio}</Text>
          </View>  */}

          <FlatList
            data={infinitearray} 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={this.renderItem}
         />  
          {/* <Text>{infinitearray[0].bio}</Text> */}
        <MyLoader iscorrect={iscorrect}/>



        </SafeAreaView>
      );
    }
  }

  const mapStateToProps = state =>{
  
  return{
    // newObj:state.reducer.newObj
    infinitearray:state.reducer.infinitearray,
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
      height: 300,
      width: 160,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    textsize: {
     fontFamily:fontFamily.new
    },
  });
  