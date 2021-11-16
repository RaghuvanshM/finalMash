import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../constants/colors';
import AddIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {compose} from 'redux';
import {cos} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {getData} from '../../utils/storage';
import data from '../../constants/data';
import {getCart} from '../../module/actions/cart';
const {height, width} = Dimensions.get('window');
class GridProduct extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cartItem: 0,
    };
  }
  subItem = async item => {
    const url = 'http://siyakart.in/api/remove-cart';
    let {cartItem} = this.state;
    console.log(item.item);
    let user_id = await getData('loginuserId');
    this.setState({cartItem: cartItem - 1});
    axios({
      method: 'POST',
      url: url,
      data: {
        user_id: parseInt(user_id),
        cart_id: parseInt(item.item.id),
      },
    }).then(res => {
      console.log(res.data);
      this.props.getCartData(parseInt(user_id));
    });
  };
  addItem = async item => {
    const url = 'http://siyakart.in/api/add-to-cart';
    let {cartItem} = this.state;
    console.log(item.item);
    let user_id = await getData('loginuserId');
    this.setState({cartItem: cartItem + 1});
    axios({
      method: 'POST',
      url: url,
      data: {
        user_id: parseInt(user_id),
        qty: 1,
        product_id: parseInt(item.item.id),
      },
    }).then(res => {
      console.log(res.data);
      this.props.getCartData(parseInt(user_id));
    });
  };
  singleProductPress = async item => {
    console.log(item);
    try {
      let productDetail = await axios.get(
        `http://siyakart.in/api/product-detials/${item?.item?.id}`,
      );
      console.log(productDetail);
      if (productDetail?.data?.data) {
        this.props.dispatchProductDetails(productDetail?.data?.data);
        console.log(productDetail?.data?.data);
        this.props.navigation.navigate('productdetail', {
          data: productDetail?.data?.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let {item} = this.props;
    let {cartItem} = this.state;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.singleProductPress(item);
        }}>
        <View style={styles.productWapperWrraper}>
          <View style={styles.imgWrapper}>
            <Image
              resizeMode="contain"
              source={{uri: item?.item?.thumbnail}}
              style={styles.img}
            />
          </View>
          <View style={styles.titleWrapper}>
            <Text numberOfLines={1} style={styles.nameText}>
              {item?.item?.name}
            </Text>
          </View>
          <View style={{paddingLeft: 7}}>
            <Text style={styles.descriptionText} numberOfLines={1}>
              {' '}
              {item?.item?.description}
            </Text>
          </View>
          <View
            style={[
              styles.titleWrapper,
              {
                flexDirection: 'row',
                paddingRight: 10,
              },
            ]}>
            <Text style={styles.priceText}>
              &#8377;{Math.round(item?.item?.discount_price)}
            </Text>
            <Text style={styles.strikeText}>
              &#8377;{Math.round(item?.item?.price)}
            </Text>
          </View>
          <View style={styles.addToCartWrapper}>
            <View style={styles.addToCartInneerView}>
              {cartItem === 0 ? (
                <Text style={styles.addText}>Add</Text>
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.cartItemText}>{cartItem}</Text>
                  </View>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                this.addItem(item);
              }}
              style={styles.addToCartInneerView1}>
              <AddIcon size={20} name={'plus'} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    dispatchProductDetails: data =>
      dispatch({type: 'GET_PRODUCT_DETAILS', data: data}),
    getCartData: userId => dispatch(getCart(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GridProduct);
const styles = StyleSheet.create({
  container: {
    width: width / 3 - 10,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    margin: 5,
  },
  productWapperWrraper: {
    width: width / 3 - 10,
    height: 240,
    borderWidth: 0.25,
    borderRadius: 5,
    borderColor: colors.lightGray,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  img: {
    height: 100,
    width: '90%',
  },
  imgWrapper: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    padding: 3,
    paddingLeft: 10,
  },
  nameText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    lineHeight: 18,
  },
  descriptionText: {
    fontSize: 13,
    color: colors.darkGray,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16,
  },
  priceText: {
    fontSize: 16,
    color: colors.darkBlack,
    fontWeight: 'bold',
  },
  strikeText: {
    textDecorationLine: 'line-through',
    padding: 2,
    marginLeft: 10,
  },
  addToCartWrapper: {
    height: 35,
    width: '90%',
    backgroundColor: '#119744',
    marginTop: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginLeft: 8,
  },
  addToCartInneerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartInneerView1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  cartItemText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
});
