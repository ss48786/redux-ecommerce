import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { Actions, GiftedChat } from 'react-native-gifted-chat';
import styles from "./styles";
import actions from "../../redux/actions";



export default class Chatcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        this.onSend = this.onSend.bind(this);
    }
    componentDidMount=()=>{
        this.commonConversation();
    }

    commonConversation=()=>{
actions.get_Individual_Conversation().then
(response=>{

}

).catch(
    response=>{
        
    }

    
)
    }









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
        const { item } = this.props.route.params;
        const { chatarray } = this.state;
        console.log(item, "data at chat card page")

        return (
            <View style={{ flex: 1 }}>
                
                <TouchableOpacity>

                    {/* <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <Text style={styles.textsize}>{item.userInfo.profileImg[0].thumbnail}</Text>
                    </View> */}

                    <View style={styles.viewlatestdealscard}>
                        <Image style={styles.card} source={{
                            uri: item.userInfo.profileImg[0].thumbnail
                        }} />
             <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.userInfo.fullName}</Text>
                    </View>

                </TouchableOpacity>
                <View>


                   

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

