import axios from 'axios';
import React, {Component} from 'react';

import {
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../containers/Button';
import RCTextInput from '../../containers/TextInput';
import {getData} from '../../utils/storage';
import {images} from '../../assets';
class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastNae: '',
      phone: '',
      emailAddress: '',
      zip_Postalcode: '',
      city: '',
      region_state: '',
      country: '',
      isSeconForm: false,
      zipCode: [],
      ismodalVisiable: false,
      street_address: '',
      isaddressSame: false,
      checkbox: false,
    };
  }
  componentDidMount() {
    this.getZipList();
  }
  getZipList = () => {
    try {
      axios({
        method: 'GET',
        url: 'http://siyakart.in/api/zip-list',
      }).then(res => {
        this.setState({zipCode: res.data.data});
      });
    } catch (e) {}
  };
  onPressSave = async () => {
    let userId = await getData('loginuserId');
    console.log(userId);
    alert('Save Successfully');
    let {
      firstName,
      lastNae,
      phone,
      emailAddress,
      zip_Postalcode,
      city,
      region_state,
      country,
      street_address,
      checkbox,
    } = this.state;
    try {
      axios({
        method: 'POST',
        url: 'http://siyakart.in/api/add-shipping-billing',
        data: {
          c_first_name: firstName,
          c_last_name: lastNae,
          c_email: emailAddress,
          c_phone: phone,
          c_country: 'India',
          c_state: region_state,
          c_zip: zip_Postalcode,
          c_address1: street_address,
          c_address2: '',
          checkbox: true,
          b_first_name: 'sunil',
          b_last_name: 'Kumar',
          b_email: 'sunil@gmail.com',
          b_phone: '9918642325',
          b_country: 'India',
          b_state: 'U.P.',
          b_zip: '272152',
          b_address1: 'New Ashok Nager',
          b_address2: 'house no.D-106',
          user_id: parseInt(userId),
        },
      }).then(response => {});
    } catch (e) {
      console.log(e);
    }
  };
  ZipPostalCodePress = () => {
    this.getZipList();
    this.setState({ismodalVisiable: true});
  };
  singleZipPress = item => {
    this.setState({zip_Postalcode: item, ismodalVisiable: false});
    try {
      axios({
        method: 'GET',
        url: `http://siyakart.in/api/zip/${item}`,
      }).then(response => {
        console.log(response.data.data.city);
        this.setState({
          city: response.data.data.city,
          region_state: response.data.data.state,
          country: 'India',
          street_address: response.data.data.area,
        });
      });
    } catch (e) {}
  };
  render() {
    let {
      firstName,
      lastNae,
      phone,
      emailAddress,
      zip_Postalcode,
      city,
      region_state,
      country,
      street_address,
    } = this.state;
    return (
      <>
        <View>
          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              elevation: 24,
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <AntDesign name={'arrowleft'} size={25} />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 20, margin: 20}}>Shipping Details</Text>
            <RCTextInput
              placeholder={'First Name'}
              onChangeText={text => this.setState({firstName: text})}
            />
            <RCTextInput
              placeholder={'Last Name'}
              onChangeText={text => this.setState({lastNae: text})}
            />
            <RCTextInput
              placeholder={'Phone'}
              onChangeText={text => this.setState({phone: text})}
            />
            <RCTextInput
              placeholder={'Email Address'}
              onChangeText={text => this.setState({emailAddress: text})}
            />
            <RCTextInput
              placeholder={' Zip/Postal Code'}
              onPress={() => this.ZipPostalCodePress()}
              isZip={true}
              ZipCode={zip_Postalcode}
              onChangeText={text => this.setState({zip_Postalcode: text})}
            />
            <RCTextInput
              placeholder={'City'}
              value={city}
              onChangeText={text => this.setState({city: text})}
            />
            <RCTextInput
              placeholder={'Region / State'}
              value={region_state}
              onChangeText={text => this.setState({region_state: text})}
            />
            <RCTextInput
              placeholder={'Country'}
              value={'India'}
              onChangeText={text => this.setState({country: text})}
            />
            <RCTextInput
              placeholder={'Street Address'}
              value={street_address}
              onChangeText={text => this.setState({country: text})}
            />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginLeft: 10,
              }}
              onPress={() => {
                this.setState({
                  isSeconForm: !this.state.isSeconForm,
                  isaddressSame: !this.state.isaddressSame,
                });
              }}>
              <View>
                <Image
                  source={
                    this.state.isaddressSame ? images.chekc : images.uncheck
                  }
                />
              </View>
              <Text style={{fontSize: 15, margin: 10}}>
                Bill to Another Address
              </Text>
            </TouchableOpacity>
            {this.state.isSeconForm && (
              <View>
                <RCTextInput placeholder={'First Name'} />
                <RCTextInput placeholder={'Last Name'} />
                <RCTextInput placeholder={'Phone'} />
                <RCTextInput placeholder={'Email Address'} />
                <RCTextInput placeholder={' Zip/Postal Code'} />
                <RCTextInput value={city} placeholder={'City'} />
                <RCTextInput placeholder={'Region / State'} />
                <RCTextInput placeholder={'Country'} />
                <RCTextInput placeholder={'Street_address'} />
              </View>
            )}
            <View style={{alignItems: 'center'}}>
              <Button
                title={'save'}
                onPress={() => {
                  this.onPressSave();
                }}
              />
            </View>
          </ScrollView>

          <Modal
            visible={this.state.ismodalVisiable}
            style={styles.modal}
            transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: 200,
                  width: '100%',
                  backgroundColor: 'white',
                  elevation: 34,
                  padding: 10,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <Text style={styles.itemStyle}>Select Zip</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ismodalVisiable: false});
                    }}>
                    <AntDesign name={'close'} size={30} />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={this.state.zipCode}
                  showsVerticalScrollIndicator={false}
                  renderItem={(item, index) => (
                    <ZipItem
                      onPress={item_zip => {
                        this.singleZipPress(item_zip);
                      }}
                      item={item}
                    />
                  )}
                  keyExtractor={(item, index) => String(index)}
                />
              </View>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}

const ZipItem = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={{padding: 5}}
      onPress={() => {
        onPress(item.item.zip);
      }}>
      <Text style={styles.itemStyle}>{item.item.zip} </Text>
    </TouchableOpacity>
  );
};

export default AddAddress;
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  itemStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});
