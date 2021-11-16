import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import CartStrip from '../Components/CartStrip';

class CategoreyItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    let {item} = this.props;
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.innerContainer} activeOpacity={0.6}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '90%',
                }}
                resizeMode={'contain'}
                source={{uri: item.item.thumbnail}}
              />
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
              }}>
              <Text style={styles.priceText}>{item.item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={styles.priceText}>{item.item.discount_price}</Text>
                <Text style={styles.strikeText}>{item.item.price}</Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 100,
                  backgroundColor: 'green',
                  marginTop: 10,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                activeOpacity={0.5}>
                <Text style={[styles.priceText, {color: 'white'}]}>Add</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default CategoreyItem;
const styles = StyleSheet.create({
  container: {
    height: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  priceText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  strikeText: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    marginLeft: 10,
  },
});
