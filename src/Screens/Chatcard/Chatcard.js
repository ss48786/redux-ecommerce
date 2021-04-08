import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet,Image } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chatcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        this.onSend = this.onSend.bind(this);
    }
    // renderItem=({ item })=>{

    //     <View>

    //     <TouchableOpacity>

    //        {/* <View style={{flexDirection:'row', marginTop:50}}>
    //           <Text style={styles.textsize}>{item.userInfo.profileImg[0].thumbnail}</Text>
    //         </View>  */}

    //         <View style={styles.viewlatestdealscard}>
    //           <Image style={styles.card} source={{
    //             uri: item.userInfo.profileImg[0].thumbnail
    //           }} />
    //           <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.userInfo.fullName}</Text>
    //         </View> 

    //     </TouchableOpacity>



    //   </View>
    // }



    renderItem = ({item}) => {

        console.log("RENDER ITEM", item);
     
//         return (
// <Text>
//             {item.userInfo.fullName}
//         </Text>
//         )
        
                return (
                  <View>

            <TouchableOpacity>

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

    componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
              },
            },
          ],
        });
      }
      onSend(messages = []) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
      } 
    render() {
        const { cardarray } = this.props.route.params;
        const { chatarray } = this.state;
        console.log(cardarray, "data at chat card page")

        return (
            <View style={{ flex: 1 }}>
                <Text>hhv</Text>
                {/* <FlatList
                data={cardarray}
                showsVerticalScrollIndicator={false}
                numColumns={1}
             keyExtractor={(item) => item.id}
                
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={this.renderItem}
                /> */}
                <View>


                    <FlatList

                        data={cardarray}

                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
                        renderItem={this.renderItem}

                        bounces={false}
                    />

                </View>

                <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />

                
            </View>
        )
    }
}

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