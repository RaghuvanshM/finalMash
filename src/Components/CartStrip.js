import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartIcon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';

class CartStrip extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.cartData);
  }
  render() {
    return (
      <>
        {this.props.cartData && (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('mycart');
              }}
              activeOpacity={0.9}
              style={styles.bottmCartItemWrapper}>
              <View style={styles.leftbottmCartWrapper}>
                <CartIcon name={'shopping-cart'} size={20} color={'white'} />
                <View>
                  <Text style={styles.itemText}>{`${
                    this.props.cartData.cartProducts.items &&
                    this.props.cartData?.cartProducts?.items.length
                  } items`}</Text>
                </View>
                <View
                  style={{
                    height: 15,
                    width: 2.5,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    marginTop: 3,
                    alignSelf: 'center',
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.itemText}>
                    {this.props.cartData?.cartProducts?.sub_total}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    marginLeft: 5,
                  }}>
                  <Text style={styles.strikeText}>
                    {' '}
                    {this.props.cartData?.cartProducts?.sub_total}
                  </Text>
                </View>
              </View>
              <View style={styles.rightbottmCartWrapper}>
                <View>
                  <Text style={styles.itemText}>Checkout</Text>
                </View>
                <View style={styles.leftbottmCartWrapper}>
                  <AntDesign name={'right'} size={20} color={'white'} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CartStrip);
const styles = StyleSheet.create({
  bottmCartItemWrapper: {
    height: 50,
    width: '90%',
    backgroundColor: '#e86225',
    justifyContent: 'space-between',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  strikeText: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: 'white',
  },
  leftbottmCartWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightbottmCartWrapper: {
    marginRight: 10,
    flexDirection: 'row',
  },
});
