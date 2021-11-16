import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartItem from '../../Components/CartItem';
import CartIcon from 'react-native-vector-icons/FontAwesome5';
import {deleteData, getData} from '../../utils/storage';
import {getCart} from '../../module/actions/cart';
import {connect} from 'react-redux';
import {setToken} from '../../module/actions/login';

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: [],
      cartitemData: null,
    };
  }
  getCartItem = async () => {
    let userid = await getData('loginuserId');
    let cartData = await axios({
      method: 'GET',
      url: `http://siyakart.in/api/cart-list/${userid}`,
    });
    console.log(cartData?.data?.data?.items);
    if (cartData?.data?.data?.items.length > 0) {
      this.setState({
        cartItem: cartData?.data?.data?.items,
        cartitemData: cartData?.data?.data,
      });
    }
  };
  componentDidMount() {
    this.getCartItem();
  }

  onMinusIcon = async item => {
    //let loginid = await parseInt(getData('loginuserId'));
    //console.log(loginid);
    axios({
      method: 'POST',
      url: 'http://siyakart.in/api/remove-cart',
      data: {
        user_id: 69,
        cart_id: item.product_id,
      },
    }).then(res => {
      console.log(res);
      this.getCartItem();
    });
    // this.props.getCartList(69);

    // this.getCartItem();
  };
  proceedButtonPress = async () => {
    let userid = await getData('loginuserId');
    if (userid) {
      this.props.navigation.navigate('myaddress');
    } else {
      this.props.setUser(true);
      // deleteData('tempUserId');
    }
  };
  render() {
    let {cartitemData} = this.state;
    console.log(cartitemData);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#ffff" />
        <View style={styles.cartHeaderView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <AntDesign
              style={{marginLeft: 10, color: 'black'}}
              size={25}
              name="arrowleft"
            />
          </TouchableOpacity>
          <Text style={styles.myCartText}>my cart</Text>
        </View>
        <ScrollView style={{marginBottom: 20}}>
          <View style={styles.innerHeaderContainner}>
            <Text style={styles.shipText}>shipment 1 of 1</Text>
            <Text style={styles.itemText}>3 items(s)</Text>
          </View>
          <View style={styles.delieveryContainer}>
            <Text style={styles.delieveryText}>delievery in 10 minutes</Text>
            <Text style={styles.superText}>from Super Store -UPNCR GK ES1</Text>
          </View>
          {this.state.cartItem &&
            this.state.cartItem.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  onMinusIcon={cartItem => {
                    this.onMinusIcon(cartItem);
                  }}
                />
              );
            })}

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: '#c6f5de',
                width: '75%',
              }}>
              {/* <Image
                style={{width: 50, height: 50}}
                source={require('../../assets/images/grof.png')}
              /> */}
              <View>
                <View
                  style={{flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                  <Text style={{fontFamily: 'Poppins-SemiBold'}}>
                    flat 50% off{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      fontWeight: '900',
                    }}>
                    on your first order
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'grey',
                    fontFamily: 'Poppins-Regular',
                    marginLeft: 10,
                  }}>
                  use coupon code on payment page
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '100%',
                backgroundColor: 'rgb(233,97,37)',
                width: 1,
              }}></View>
            <View style={{backgroundColor: '#c6f5de', width: '25%'}}>
              <Text style={{textAlign: 'center', marginTop: 10}}>use code</Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 2,
                  fontSize: 19,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#E96125',
                }}>
                getfast
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                marginLeft: 10,
                marginTop: 10,
                fontSize: 16,
              }}>
              bill details
            </Text>
            <View style={{marginLeft: 10, flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',
                  fontSize: 13,
                }}>
                MRP
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',
                  position: 'absolute',
                  right: 20,
                  fontSize: 13,
                }}>
                {' '}
                ₹832
              </Text>
            </View>
            <View style={{marginLeft: 10, flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',
                  fontSize: 13,
                }}>
                product discount
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',
                  position: 'absolute',
                  right: 20,
                  fontSize: 13,
                }}>
                {' '}
                -₹81
              </Text>
            </View>
            <View style={{marginLeft: 10, flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',
                  fontSize: 13,
                }}>
                delievery charges
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'lightgreen',
                  position: 'absolute',
                  right: 20,
                  fontSize: 13,
                }}>
                {' '}
                FREE
              </Text>
            </View>
            <View style={{marginLeft: 10, flexDirection: 'row', marginTop: 20}}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'black',
                  fontSize: 14,
                }}>
                bill Total
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'black',
                  position: 'absolute',
                  right: 20,
                  fontSize: 14,
                }}>
                {' '}
                ₹751
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.proceedButtonPress();
          }}
          activeOpacity={0.8}
          style={styles.cartButton}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CartIcon name={'shopping-cart'} size={20} color={'white'} />
            <View style={{marginLeft: 10}}>
              <Text style={[styles.noofItemes, {marginLeft: 4}]}>
                {`${this.state.cartItem.length} Items`}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={[styles.noofItemes]}>
                  {' '}
                  {cartitemData !== null && cartitemData.sub_total}
                </Text>
                <Text style={styles.strikeText}>
                  {' '}
                  {cartitemData !== null && cartitemData.total}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.noofItemes}>Proceed</Text>
            <AntDesign
              name={'right'}
              size={20}
              color={'white'}
              style={{marginLeft: 5, marginTop: 3}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    cartData: state.cart,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCartList: userId => dispatch(getCart(userId)),
    setUser: data => dispatch(setToken(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartHeaderView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: 20,
    alignItems: 'center',
  },
  myCartText: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10,
  },
  innerHeaderContainner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#cccdcf',
    height: 35,
  },
  shipText: {
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    textAlignVertical: 'center',
    paddingVertical: 5,
  },
  itemText: {
    marginRight: 10,
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    textAlignVertical: 'center',
    paddingVertical: 5,
  },
  delieveryContainer: {
    height: 70,
    backgroundColor: 'white',
    width: '100%',
  },
  delieveryText: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10,
    textAlignVertical: 'center',
    paddingTop: 15,
  },
  superText: {
    fontSize: 13,
    color: '#454647',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    textAlignVertical: 'center',
  },
  cartButton: {
    height: 55,
    width: '100%',
    backgroundColor: '#e86225',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noofItemes: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-bold',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  strikeText: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
    marginTop: 3,
  },
});
