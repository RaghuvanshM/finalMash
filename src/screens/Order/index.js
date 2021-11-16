import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

const LIST = [
  {
    id: '1',

    userImg: require('../../assets/images/louis.jpg'),
    detail: 'Faber Hood Zenith FL SC AC BK 90cm',
    status: 'Refund Completed',
  },
  {
    id: '2',

    userImg: require('../../assets/images/chimney.jpg'),
    detail: 'Faber Hood Zenith FL SC AC BK 90cm',
    status: 'Refund Completed',
  },
  {
    id: '3',

    userImg: require('../../assets/images/chimney.jpg'),
    detail: 'Faber Hood Zenith FL SC AC BK 90cm',
    status: 'Refund Completed',
  },

  {
    id: '4',

    userImg: require('../../assets/images/chimney.jpg'),
    detail: 'Faber Hood Zenith FL SC AC BK 90cm',
    status: 'Refund Completed',
  },

  {
    id: '5',

    userImg: require('../../assets/images/chimney.jpg'),
    detail: 'Faber Hood Zenith FL SC AC BK 90cm',
    status: 'Refund Completed',
  },
  {
    id: '6',

    userImg: require('../../assets/images/narzo.jpg'),
    detail: 'Realme Narzo 30 (Racing Blue 64 Gb...)',
    status: 'Refund Completed',
  },
];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistrory: [],
    };
  }
  async componentDidMount() {
    let orderHistory = await axios({
      method: 'GET',
      url: 'http://siyakart.in/api/get-order?user_id=10',
    });
    if (orderHistory?.data?.data) {
      console.log(orderHistory);
      this.setState({orderHistory: orderHistory?.data?.data});
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#E86223" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            height: 55,
            backgroundColor: '#fb6d00',
          }}>
          <TouchableOpacity>
            <AntDesign
              style={{left: 10, paddingTop: 18, color: 'white'}}
              size={25}
              name="arrowleft"
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              left: 60,
              fontSize: 19,
              paddingTop: 17,
              color: 'white',
              fontFamily: 'Poppins-Regular',
            }}>
            My Order
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 60,
              paddingTop: 20,
              color: 'white',
            }}
            onPress={() => {
              this.props.navigation.navigate('Search');
            }}>
            <Ionicons size={20} name="search" color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              paddingTop: 20,
              color: 'white',
            }}
            onPress={() => {
              this.props.navigation.navigate('mycart');
            }}>
            <Entypo size={18} name="shopping-cart" color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#f2f2f2', flex: 1}}>
          <FlatList
            contentContainerStyle={{width: '100%', marginTop: 10}}
            showsVerticalScrollIndicator={false}
            data={this.state.orderHistory}
            keyExtractor={(_, index) => String(index)}
            renderItem={({item}) => (
              <View
                style={{
                  height: 120,
                  backgroundColor: 'white',
                  marginVertical: 1,
                  marginHorizontal: 5,
                  elevation: 3,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginVertical: 10, marginLeft: 10}}>
                    <Image
                      style={{height: 100, width: 85, resizeMode: 'center'}}
                      source={require('../../assets/images/narzo.jpg')}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        marginTop: 30,
                        marginLeft: 20,
                      }}>
                      {item.status}
                    </Text>
                    <Text
                      style={{
                        marginLeft: 20,
                        marginTop: 5,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <ActivityIndicator size={20} color="red" />
      </View>
    );
  }
}
