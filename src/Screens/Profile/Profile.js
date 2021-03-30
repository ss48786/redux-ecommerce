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
    Modal,
    Pressable,
   
   
    
 
  } from "react-native";
import imagePath from "../../constants/imagePath";
import navigationString from "../../constants/navigationString";
import Button from "../../Components/Button"

 
export default class Profile extends Component{
    constructor(){
        super()
        this.state={
          modalVisible: false,
          mycolor:[
            {
              id:1,
              type:'red',
              color:'#ff0000'
            },
            {
              id:2,
              type:'blue',
              color:'#0026ff'
            },
            {
              id:3,
              type:'green',
              color:'#00ff2a'
            },
            {
              id:4,
              type:'theme',
              color:'#36b6b0'
            }
          ]
        }
    }
    
    setModalVisible = () => {
      this.setState({ modalVisible: true });
    }
    ModalClose = () => {
      this.setState({ modalVisible: false });
    }
    renderItem = ({item}) => {
      
      return (
        <View style={{backgroundColor:item.color}}>
        
      </View>
      );
    };
  
render(){
  const {modalVisible,mycolor} =this.state;
    return(
        <View syle={{flex:1}}>
        <View>
<Image source={imagePath.profile} style={styles.profile}/>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop:30 }}>
          <TouchableOpacity>
            <Image style={styles.cameraset} source={imagePath.camera}></Image>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() =>this.openImage()}> */}
          <TouchableOpacity onPress={this.openImage}>
            <Image style={styles.cameraset} source={imagePath.gallery}></Image>
          </TouchableOpacity>
        </View>
        <Button buttonName="Change theme colour" styleofprofilebutton={styles.styleofprofilebutton} onButtonPress={()=>this.setModalVisible()}/>
        <View>
        <Modal
        transparent
        onRequestClose={()=>this.ModalClose()}
        visible={modalVisible}  
        >
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <FlatList
           data={mycolor} 
           showsVerticalScrollIndicator={false}
           numColumns={2}
           keyExtractor={(item) => item.id}
           ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
           renderItem={this.renderItem}
          />
          </View>
          </Modal>
        </View>
        </View>
    )
}
}
const styles=StyleSheet.create({
    profile:{
height:150,
width:150,
marginLeft:110,
marginTop:50
    },
    cameraset: {
        height: 50,
        width: 50,
        margin: 10,
      },
      styleofprofilebutton:{
          width:200,
          marginTop:30
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
})