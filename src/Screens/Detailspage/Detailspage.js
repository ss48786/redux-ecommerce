


import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList
} from "react-native";
import imagePath from "../../constants/imagePath";
import navigationString from "../../constants/navigationString";

import Button from "../../Components/Button";
import Textinput from "../../Components/Textinput";
import { types } from "@babel/core";
import { connect } from "react-redux";
import store from "../../redux/store";
import Header from "../../Components/Header";
import ImageZoom from "react-native-image-pan-zoom";
import {Dimensions} from 'react-native';

const{dispatch} = store;



   class Detailspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  
  // componentDidMount(){
  //   store.subscribe(()=>this.setState({}))
  // }


  renderItem = ({item}) => {
      
    return (
      <View style={{flex:1}}>
       

      <View style={{ justifyContent: "space-between", margin: 10 }}>
        {/* <Image style={styles.card} source={item.image} /> */}
      </View>


      <View>
        
   <Text style={{  fontWeight: "bold", marginLeft:40 }}>
            {item.name}
          </Text>
      
          <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>
            Click to Buy
          </Text>

      
        
     
   
    </View>
    </View>
    );
  };
  
  render() {
  
    const {newObj}=this.props;
    // alert(JSON.stringify(newObj))
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
<Header/>
        {/* <Image style={styles.card} source={newObj.image} /> */}
        <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={160}
                       imageHeight={300}>
                <Image style={styles.card}
                       source={newObj.image}/>
            </ImageZoom>
        <FlatList
            data={newObj} 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={this.renderItem}
         /> 
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state =>{
  return{
    newObj:state.reducer.newObj
  }

  }

  export default connect(mapStateToProps)(Detailspage);

  

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop:20
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
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 10,
    width: 100,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
   marginLeft:40,
   marginTop:10
  },
});
