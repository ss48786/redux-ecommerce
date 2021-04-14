import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {Actions, GiftedChat} from 'react-native-gifted-chat';
import styles from './styles';
import actions from '../../redux/actions';
import {connect} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import socketServices from '../../utils/socketService';
import { SOCKET_STRINGS } from '../../constants/socketString';
import imagePath from '../../constants/imagePath';

class Chatcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      commonConversationId: '',
    };
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount = () => {
    this.getChatListing();
  };

  // commonConversation = () => {
  //   const {item} = this.props.route.params;
  //   const {data} = this.props;
  //   console.log(item, 'data from common id');

  //   //    console.log(item.commonConversationId,"checking cc id")
  //   actions
  //     .get_Individual_Conversation(item.commonConversationId)
  //     .then(response => {
  //       // console.log(response,"response at chat card")
  //       alert(JSON.stringify(response));

  //       showMessage({
  //         type: 'success',
  //         icon: 'success',
  //         message: 'API HITTED',
  //       });
  //     })
  //     .catch(response => {});
  // };

  getChatListing = () => {
    const {item} = this.props.route.params;
    const {userData} = this.props;
    actions
      .get_Individual_Conversation(item.commonConversationId)

      .then(res => {
          
        //To send back response that all the messages have been seen;
        socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
          senderId: item._id,
          isRead: true,
          recieverId: (this.props.userData && this.props.userData._id) || '',
        });
        //Initalizing the chat history
        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId._id,
              name: data.senderId.firstName,
              avatar: data.senderId.profileImg[0].thumbnail
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }

          showMessage({
            type: 'success',
            icon: 'success',
            message: 'API HITTED',
          });
          return message;
        });
        this.setState({isLoading: false, messages});
      })
      .catch(this.errorMethod);
  };

  onSend(messages = []) {
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const{_id , commonConversationId }=this.props.route.params.item;
    // const {_id, commonConversationId} = this.props.route.params;
    

    const {userData} = this.props;
    // To send new message
    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: _id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }







  
  render() {
    const {item} = this.props.route.params;
    const {chatarray} = this.state;
    const{userData}=this.props;

    console.log(item, 'data at chat card page');

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity>
          {/* <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <Text style={styles.textsize}>{item.userInfo.profileImg[0].thumbnail}</Text>
                    </View> */}

          <View style={styles.viewlatestdealscard}>
            <Image
              style={styles.card}
              source={{
                uri: item.userInfo.profileImg[0].thumbnail,
              }}
            />
            <Text style={{fontWeight: 'bold', marginTop: 10}}>
              {item.userInfo.fullName}
            </Text>
          </View>
        </TouchableOpacity>
        <View></View>

        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: userData._id,
          }}
        />
      </View>
    );
  }
}

// const mapStateToProps = state=>{
//     return{
//         data:state.reducer.userdata
//     }
// }

// export default connect(mapStateToProps)(Chatcard);

const mapStateToProps = state => {
  return {
    userData: state.reducer.userData,
  };
};
//  console.log("checking infinitearray",infinitearray);
export default connect(mapStateToProps)(Chatcard);
