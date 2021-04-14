import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {connect} from 'react-redux';
import Loader from '../../Components/Loader';
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import socketServices from '../../utils/socketService';
import styles from './styles';


class GiftedChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: '10',
      chatarray: [],
      cardarray: [],
    };
  }

  componentDidMount = () => {
    const {data}= this.props;
    socketServices.initializeSocket(data.accessToken);
    this.HIT_CHAT();
  };
  HIT_CHAT = () => {
    const {skipcount, limit, chatarray} = this.state;
    console.log(skipcount, 'at chat pager');

    const {data} = this.props;
    console.log(data, 'access token in chat');

    let headers = {
      Authorization: data.accessToken,
    };
    actions
      .GetConversation(limit, headers)
      .then(response => {
        console.log(response, ' response in chat function');
        showMessage({
          type: 'success',
          icon: 'success',
          message: 'API HITTED',
        });
        this.setState({
          chatarray: [...response.data],
        });
      })
      .catch(response => {});
  };
  Onchatcard = item => {
    const {chatarray, cardarray} = this.state;
    const {navigation} = this.props;

    // let newarray=[item]

    navigation.navigate(navigationString.CHATCARD, {item: item});
  };

  renderItem = ({item}) => {
    // console.log("RENDER ITEM" , item) ;

    return (
      <View>
        <TouchableOpacity onPress={() => this.Onchatcard(item)}>
          {/* <View style={{flexDirection:'row', marginTop:50}}>
              <Text style={styles.textsize}>{item.userInfo.profileImg[0].thumbnail}</Text>
            </View>  */}

          <View style={commonStyles.viewlatestdealscard}>
            <Image
              style={commonStyles.card}
              source={{
                uri: item.userInfo.profileImg[0].thumbnail,
              }}
            />
            <Text style={{fontWeight: 'bold', marginTop: 10}}>
              {item.userInfo.fullName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {chatarray} = this.state;
    // console.log(cardarray, ' THIS IS CARDARRAY');
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Button style={{marginTop:20}} onButtonPress={this.onButtonPress}/> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', marginTop: 30, marginLeft: 10}}>
              Abigael Abimaniya
            </Text>
            <Text style={{marginTop: 10, marginLeft: 10}}>
              Love, life and chill
            </Text>
          </View>

          <Image source={imagePath.dp} style={styles.dp} />
        </View>
        <View style={{position: 'relative'}}>
          {/* <View>
              <Textinput placeholder="Search for name" styleofsearch={styles.stylesearch} onChangeText={(text)=>this.setState({username:text})}/>
            </View>
            <View style={{position:'absolute',marginHorizontal:100}}>
              <Image source={imagePath.search} style={{height:20,width:20}}/>
            </View> */}
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Category</Text>
          <Text style={{marginRight: 10}}>See all</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            style={{marginBottom: 10}}
            showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', margin: 10}}>
              <Image
                style={commonStyles.myimagescarousel}
                source={imagePath.h5}
              />
              <Image
                style={commonStyles.myimagescarousel}
                source={imagePath.h2}
              />
              <Image
                style={commonStyles.myimagescarousel}
                source={imagePath.h3}
              />
              <Image
                style={commonStyles.myimagescarousel}
                source={imagePath.h4}
              />
              <Image
                style={commonStyles.myimagescarousel}
                source={imagePath.h5}
              />
              <Image
                style={commonStyles.myimagescarousel}
                source={imagePath.h2}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Friend List</Text>
          <Text style={{marginRight: 10}}>See all</Text>
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
          keyExtractor={item => item._id}
          ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
          renderItem={this.renderItem}
          // onEndReached={this.onEndReach}
          bounces={false}
        />
        {/* <Text>{infinitearray[0].bio}</Text> */}
        {/* <MyLoader iscorrect={iscorrect} />
         */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // newObj:state.reducer.newObj
    // infinitearray: state.reducer.infinitearray,
    data: state.reducer.userData,
  };
};
//  console.log("checking infinitearray",infinitearray);
export default connect(mapStateToProps)(GiftedChat);

//
