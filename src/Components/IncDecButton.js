import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AddIcon from 'react-native-vector-icons/Feather';

class IncDec extends Component {
  constructor(props) {
    super(props);
  }
  onAddPress = async cartitem => {
    console.log(cartitem);
  };
  render() {
    return (
      <View style={[styles.addToCartWrapper, this.props.btnStyle]}>
        <TouchableOpacity
          style={styles.addToCartInneerView1}
          onPress={() => {
            this.props.onMinusPress(this.props.item);
          }}>
          <AddIcon size={20} name={'minus'} color={'white'} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.cartItemText}>{this.props.qty}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartInneerView1}>
          <AddIcon size={20} name={'plus'} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default IncDec;
const styles = StyleSheet.create({
  addToCartWrapper: {
    marginTop: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginLeft: 8,
    marginRight: 5,
  },
  cartItemText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-bold',
    fontWeight: 'bold',
  },
  addText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  addToCartInneerView1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 35,
    width: 35,
    borderRadius: 5,
  },
});
