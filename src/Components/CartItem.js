import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import IncDec from './IncDecButton';
const {height, width} = Dimensions.get('window');
class CartItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  singleProductPress = async item => {
    console.log(item);
    let productDetail = await axios.get(
      `http://siyakart.in/api/product-detials/${item?.product_id}`,
    );
    console.log(productDetail);
    if (productDetail?.data?.data) {
      this.props.dispatchProductDetails(productDetail?.data?.data);
      console.log(productDetail?.data?.data);
      this.props.navigation.navigate('productdetail', {
        data: productDetail?.data?.data,
      });
    }
  };
  render() {
    let {item} = this.props;
    return (
      <TouchableOpacity
        style={{
          height: 130,
          flexDirection: 'row',
          backgroundColor: 'white',
          marginTop: 1,
          elevation: 3,
        }}>
        <View style={{justifyContent: 'center', height: 130, width: 100}}>
          <Image
            style={styles.img}
            resizeMode={'center'}
            source={{uri: item?.thumbnail}}
          />
        </View>
        <View style={{flex: 1}}>
          <Text numberOfLines={2} style={styles.productDesc}>
            {item?.name}{' '}
          </Text>
          <Text style={styles.priceText}>{item?.price}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.qntyText}>273g</Text>
            <IncDec
              btnStyle={{height: 35, width: 130}}
              qty={item?.quantity}
              item={item}
              onMinusPress={cartItem => {
                this.props.onMinusIcon(cartItem);
              }}
            />
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: 'white',
    marginTop: 1,
    elevation: 3,
  },
  img: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
  },
  productDesc: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 20,
    marginTop: 10,
  },
  priceText: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceStrikeText: {
    marginLeft: 10,
    marginTop: 5,
    color: '#545557',
    textDecorationLine: 'line-through',
    fontSize: 15,
  },
  qntyText: {
    marginLeft: 20,
    marginTop: 5,
    color: '#545557',
    fontSize: 15,
  },
  incdecContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
