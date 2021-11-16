import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import TopNavBar from '../../containers/TopNavBar';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {getData} from '../../utils/storage';
class MyAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdAddressData: [],
    };
  }
  getAddress = async () => {
    let usreid = await getData('loginuserId');
    console.log(usreid);
    axios({
      method: 'POST',
      url: 'http://siyakart.in/api/shipping-list',
      data: {
        user_id: parseInt(usreid),
      },
    }).then(response => {
      this.setState({userdAddressData: response.data.data});
    });
  };
  componentDidMount() {
    this.getAddress();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
        <TopNavBar
          title={'My Address'}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('addaddress');
          }}
          style={styles.addAddressContainer}>
          <View style={styles.cicleContainer}>
            <Entypo size={15} name={'plus'} color={'#e86225'} />
          </View>
          <Text style={styles.addNewadd}>Add a new address</Text>
        </TouchableOpacity>
        <Text style={styles.chooseNewAddress}>Choose delivery address</Text>
        <FlatList
          data={this.state.userdAddressData}
          keyExtractor={(item, index) => {
            String(`${item} ${index}`);
          }}
          renderItem={(item, index) => <RenderAddressList item={item} />}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 50,
            backgroundColor: '#e86225',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textTransform: 'uppercase',
            }}>
            Place order{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MyAddress;
const RenderAddressList = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.addressView}>
      <View style={styles.selecetedItem}></View>
      <View style={{marginLeft: 10}}>
        <View style={styles.placeContainer}>
          <Text
            style={
              styles.placeTitleText
            }>{`${item.item.first_name} ${item.item.last_name}`}</Text>
          <Entypo size={20} name={'chevron-thin-right'} color={'#646464'} />
        </View>
        <Text numberOfLines={1} style={styles.addressText}>
          {item.item.address1}
        </Text>
        <Text style={styles.addressText}>{item.item.city}</Text>
        <Text style={styles.addressText}>{item.item.zip}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  addAddressContainer: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 4,
    flexDirection: 'row',
  },
  cicleContainer: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#e86225',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewadd: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  realAddress: {
    fontFamily: 'Poppins-Regular',
    width: '65%',
  },
  chooseNewAddress: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 15,
    height: 50,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  addressView: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  placeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#6c6c6c',
  },
  addressText: {
    fontFamily: 'Poppins-Regular',
    color: '#6c6c6c',
  },
  selecetedItem: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 2,
    position: 'absolute',
    top: 19.4,
    left: 5,
    borderColor: '#6c6c6c',
  },
});
