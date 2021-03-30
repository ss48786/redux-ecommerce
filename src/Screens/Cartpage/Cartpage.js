


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


import Button from "../../Components/Button";
import Textinput from "../../Components/Textinput";
import navigationString from "../../constants/navigationString";
import store from "../../redux/store";
import { connect } from "react-redux";
import Header from "../../Components/Header";
import colors from "../../styles/colors";
import { color } from "react-native-reanimated";







 class Cartpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  // componentDidMount(){
  //   store.subscribe(()=>this.setState({}))
  // }

  // const unsubscribe = store.subscribe(()=>this.setState({}))
  quantityIncrement = (id) => {
 
    const {data}=this.props.route.params
    const {TotalPrice} = this.state;
    // alert(TotalPrice)
let checkArray = [...data];

const quantityindex = checkArray.findIndex((item) => item.id === id);

let finalquantity = checkArray[quantityindex];

finalquantity.quant += 1;


let Total =0;

for(let i=0;i<checkArray.length;i++){
Total+=checkArray[i].quant*checkArray[i].Price;
console.log("total")
};

this.setState({
  data: finalquantity,
  TotalPrice: Total

  
});

console.log(TotalPrice)


};


renderItem = ({item}) => {
  console.log("RENDER ITEM" , item) ;

return (
  <View>
   
   <View style={{marginLeft:10}}>
            <Image source ={item.image} style={styles.card}
            /> 
            <Text style={{margin:10}}>{item.Price}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Button style={{backgroundColor: colors.themeColor,
    padding: 10,
    width: 30,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft:10
    
   
   }} buttonName="+"/>
       
       <Text style={{ color: "black", fontWeight: "bold",marginLeft:3 }}>Quantity</Text>
        <Text>:</Text>
        <Text style={{ marginLeft: 5, marginTop: 1, color: "black",marginRight:3 }}>
          {item.quant}
        </Text>
      <Button style={{backgroundColor: colors.themeColor,
    padding: 10,
    width: 30,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft:0
    
   
   }} buttonName="-"/>
   </View>
   

</View>
);
};

  
  render() {
   

    // console.log("idhr agya" , myarray) ;

    // const unsubscribe = store.subscribe(()=>this.setState({}))
    const {myarray} = this.props;
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Header/>
          </View>
          {/* <View style={{marginLeft:10}}>
            <Image source ={myarray[0].image} style={styles.card}
            /> 
            <Text style={{margin:10}}>{myarray[0].Price}</Text>
        </View> */}
         <FlatList
            data={myarray} 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={this.renderItem}
         /> 
        <View>
            <Text style={{marginTop: 7, fontWeight: 'bold', marginLeft: 8}}>
              PRICE DETAILS
            </Text>
            <View
              style={{
                backgroundColor: 'gray',
                height: 1,
                opacity: 0.5,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 8,
                marginTop: 5,
              }}></View>

            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7}}>Total MRP</Text>
              <Text style={{marginLeft: 'auto'}}>Rs.</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7}}>Discount on MRP</Text>
              <Text style={{marginLeft: 'auto', color: '#54baa4'}}>
                {' '}
                - Rs. 
              </Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7}}>Convenience Fee</Text>
              <Text
                style={{
                  marginLeft: 'auto',
                  textDecorationLine: 'line-through',
                }}>
                Rs.99
              </Text>
              <Text style={{color: '#54baa4'}}> FREE</Text>
            </View>
            <View
              style={{
                backgroundColor: 'gray',
                height: 1,
                opacity: 0.5,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 8,
                marginTop: 5,
              }}></View>
            <View style={styles.paymentRow}>
              <Text style={{opacity: 0.7, fontWeight: 'bold'}}>
                Total Amount
              </Text>
              <Text style={{marginLeft: 'auto', fontWeight: 'bold'}}>
                Rs. 
              </Text>
            </View>
          </View>
        
         <View>
    
     <Button buttonName="Place Order"/>
   </View>
        
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state =>{
  return{
myarray:state.reducer.myarray
  }
}

export default connect(mapStateToProps)(Cartpage);

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
  buttonStylequant: {
    backgroundColor:colors.themeColor,
    padding: 10,
    width: 80,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginRight:50,
   
    marginTop: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 8,
    marginLeft: 8,
  },
  placeOrder: {
    backgroundColor: '#808080',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
});
