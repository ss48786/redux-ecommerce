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
    TouchableOpacity
  } from "react-native";
  import { ScrollView } from "react-native-gesture-handler";
import imagePath from "../../constants/imagePath";
  import navigationStrings from "../../constants/navigationString";

import {Details,Cart} from '../../redux/reducers/action';
import navigationString from "../../constants/navigationString";
import Cartpage from "../Cartpage/Cartpage";
import { connect } from "react-redux";
import store from "../../redux/store";
import types from "../../redux/types"

const{dispatch} =store;



  
  
   class Homepage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productsArray:[{
          id: 0,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: imagePath.dp2,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 1,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: imagePath.dp3,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 2,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: imagePath.dp4,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 3,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: imagePath.dp5,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 4,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp6,
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 5,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp7,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 6,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp8,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 7,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp9,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 8,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp10,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 9,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp9,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 10,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp8,
      
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 11,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp7,
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 12,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp6,
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 13,
          name: "RED TAPE",
          text: "Checked shirt",
          image: imagePath.dp5,
          Price: 2599,
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        }],
        
    };
      };
    
      // check = store.subscribe(() => this.setState(({})))
      
    onButtonPress = () => {
      this.props.navigation.navigate(navigationStrings.TAB_ROUTES);
    };
    
   oncheck=(id)=>{
     const {productsArray} =this.state;
     
    this.props.navigation.navigate(navigationString.DETAILSPAGE);
    let newarray = [...productsArray];
    let newObj=newarray[id]
    // alert(JSON.stringify(newarray[id]));
   
    // store.dispatch(Details(newarray[id]))
    dispatch({
      type:types.DETAILS,
      payload:{newObj}
    })
    
   }
//    _onItemClick=(id)=>{
//     const {foodItemAry,newItemList}=this.state;
//     let newfoodItemAry=[...foodItemAry];
//     let index=newfoodItemAry.findIndex((item)=>item.id===id)
//     dispatch({
//       type:types.ADD_CART,
//       payload:{newfoodItemAry, index}
//   })
// }


  //  onClickCart=(id)=>{
  //   this.props.navigation.navigate(navigationString.DETAILSPAGE);
  //   store.dispatch(Details(id));

  //  }

  //  test=(id)=>{
  //   this.props.navigation.navigate(navigationString.CARTPAGE);
  //   const{productsArray} = this.state;
  //   let cartarray =[...productsArray];
  //   // alert(JSON.stringify(cartarray[id]));
  //   let index = cartarray.findIndex((item)=>item.id===id);
  //   store.dispatch(Cart(cartarray , index));
  //   // store.dispatch(Cart());


  
  //  }
    renderItem = ({item}) => {
      
      return (
        <View>
        <TouchableOpacity onPress={()=>this.oncheck(item.id)}>
        <View style={{ justifyContent: "space-between", margin: 10 }}>
          <Image style={styles.card} source={item.image} />
        </View>

  </TouchableOpacity>
        <View>
          
     <Text style={{  fontWeight: "bold", marginLeft:40 }}>
              {item.Price}
            </Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.test(item.id)}>
            <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>
              Click to Buy
            </Text>
  
        
          
       
      </TouchableOpacity>
      </View>
      </View>
      );
    };
  
    render() {
      const { productsArray, item, count } = this.state;
      const { navigation } = this.props;
  
      return (
        <SafeAreaView style={{ flex: 1 }}>
          {/* <View style={styles.loginScreen}>
            <Text onPress={this.onButtonPress}>check for Homepage</Text>
          </View> */}
         
          <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image style={styles.imageStyle} source={imagePath.m1} />
          <Image style={styles.imageStyle} source={imagePath.dp1} />

          <View style={{ flexDirection: "row" }}>
            <Image style={styles.imageStyle} source={imagePath.m2} />
            <Image style={styles.imageStyle} source={imagePath.m3} />
            <Image style={styles.imageStyle} source={imagePath.m4} />
            <TouchableOpacity onPress={this.checkCart}>
              <Image style={styles.imageStyle} source={imagePath.m5} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#f2288c",
                marginLeft: -8,
                marginTop: 2,
                marginRight: 3,
              }}
            >
           
            </Text>
          </View>
        </View>

        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.myimage} source={imagePath.r1} />
            <Image style={styles.myimage} source={imagePath.r2} />
            <Image style={styles.myimage} source={imagePath.r3} />
            <Image style={styles.myimage} source={imagePath.r4} />
            <Image style={styles.myimage} source={imagePath.r5} />
            <Image style={styles.myimage} source={imagePath.r6} />
            <Image style={styles.myimage} source={imagePath.r7} />
          </View>
        </ScrollView>

        <ScrollView>
          <TouchableOpacity >
          <Image
            style={{ height: 300, width: 340, margin: 10 }}
            source={imagePath.w1}
          />
          </TouchableOpacity>

<FlatList
            data={productsArray} 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={this.renderItem}
         /> 
        </ScrollView>

       
      </View>
    
        
        </SafeAreaView>
      );
    }
  }
  
  const mapStateToProps=state=>{
    return{
      newAry:state.newAry
    }

    }
  export default connect(mapStateToProps)(Homepage);

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
    forlogoHeading: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    imageStyle: {
      height: 25,
      width: 25,
      marginBottom: 20,
      margin: 10,
    },
    textInput: {
      flexDirection: "row",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      width: 300,
      maxHeight: 50,
      borderRadius: 12,
      marginLeft: 32,
    },
    inputField: {
      padding: 8,
    },
    header: {
      flex: 2,
      backgroundColor: "#f0f4f7",
      justifyContent: "space-around",
    },
    myimage: {
      height: 120,
      width: 100,
      borderRadius:100
      
     
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
  