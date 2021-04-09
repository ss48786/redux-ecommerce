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
import Button from "../../Components/Button";
import types from "../../redux/types";
import { connect } from "react-redux";
import styles from "./styles";



 
 class Profile extends Component{
    constructor(){
        super()
        this.state={
          modalVisible: false,
          mycolor:[
            {
              id:1,
              type:'Red',
              color:'red'
            },
            {
              id:2,
              type:'Blue',
              color:'#0026ff'
            },
            {
              id:3,
              type:'Green',
              color:'#00ff2a'
            },
            {
              id:4,
              type:'Theme',
              color:'#36b6b0'
            }
          ],
         
          
        }
    }
    
    setModalVisible = () => {
      this.setState({ modalVisible: true });
    }
    ModalClose = () => {
      this.setState({ modalVisible: false });
    }

    Color_Array=(id)=>{
  const {mycolor}= this.state;
   let colorarray=[...mycolor]
  dispatch({
    type:types.COLOR,
    payload:{colorarray}
  })
}







    renderItem = ({item}) => {
      
      return (
        <View style={{flexDirection:'row',justifyContent:'center',marginRight:15,marginTop:5}}>
       <TouchableOpacity style={{ width:120,
    
    padding:30,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor:item.color,
     }} onPress={()=>this.Color_Array(item.id)}>
         <Text style={{fontWeight:'bold'}}>{item.type}</Text>
       </TouchableOpacity>
       
       
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
        <View style={{ flexDirection:'row',justifyContent:'center',marginTop:30 }}>
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
          <View style={{flexDirection:'row',justifyContent:'center', marginTop:400,marginLeft:50,marginRight:50}}>
            
          <FlatList
           data={mycolor} 
           showsVerticalScrollIndicator={false}
           numColumns={2}
           keyExtractor={(item) => item.id}
           ItemSeparatorComponent={() => <View style={{ margin:5}} />}
           renderItem={this.renderItem}
          />
          </View>
          </Modal>
        </View>
        </View>
    )
}
}

const mapStateToProps=state=>{
  return{
    newAry:state.colorarray
  }

  }
export default connect(mapStateToProps)(Profile);

