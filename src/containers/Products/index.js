import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../../assets';
import { colors } from '../../constants/colors';
import { windowWidth } from '../../utils/deviceInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class Products extends Component {
  constructor(props) {
    super(props)

  }
  renderProducts = () => {
    return (
      <View style={[styles.productWrapper]}>
        <View style={styles.imageWrapper}>
          <Image
            source={images.dummy}
            resizeMode='contain'
            style={styles.productImage}
          />
        </View>
        <View style={styles.rightWrapper}>
          <Text style={[styles.nameText]} numberOfLines={1} ellipsizeMode={'tail'}>{'ItemTitle'}</Text>
          <Text style={styles.descriptionText} numberOfLines={2} ellipsizeMode={'tail'}>{'In publishing and graphic design, Lorem ipsum is a'}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.priceText}>&#36;{150} </Text>
            <Text style={styles.strikeText}>&#36;{150}</Text>
            <View style={styles.quantityWrapper}>

              <TouchableOpacity
                style={[styles.minusQuantityView]}
                activeOpacity={0.6}
              // onPress={() => this.manageQuantity(item, quantity - 1, 'minus')}

              >
                <Icon name={'minus'} size={18} color={colors.red} />
              </TouchableOpacity>
              <View style={styles.quantityView}>
                  <Text style={styles.quantityText}>{'3'}</Text>
                </View>
                <TouchableOpacity
                  style={styles.plusQuantityView}
                  activeOpacity={0.6}
                  // onPress={() => this.manageQuantity(item, quantity + 1, 'plus')}
                 
                >
                  <Icon name={'plus'} size={18} color={colors.white} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.quickViewStyle} >
            <MaterialCommunityIcon name={'arrow-expand-all'} size={12} color={colors.red} />
          </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderProducts()}
      </View>

    )
  }
}
export default Products;

const wrapper = {
  height: 36,
  width: 35,
  alignItems: 'center',
  justifyContent: 'center'
}

const styles = StyleSheet.create({
  productWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    height: 120,
    backgroundColor: colors.white
  },
  imageWrapper: {
    height: 100,
    width: 100,
    backgroundColor: colors.paleGray,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productImage: {
    height: 100,
    width: 100
  },
  rightWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: windowWidth - 150
  },
  nameText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    lineHeight: 18
  },
  descriptionText: {
    fontSize: 13,
    color: colors.darkGray,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  priceText: {
    fontSize: 16,
    color: colors.darkBlack,
    fontWeight: 'bold'
  },
  strikeText: {
    textDecorationLine: 'line-through'
  }, quantityWrapper: {
    flexDirection: 'row'
  },
  quantityWrapper: {
    flexDirection: 'row'
  },
  minusQuantityView: {
    ...wrapper,
    borderWidth: 1,
    borderRadius: 4
  },
  quantityText: {
    fontSize: 16,
    color: colors.darkBlack,
    fontFamily: 'Poppins-SemiBold'
  },
  quantityView: {
    ...wrapper
  },
  plusQuantityView: {
    ...wrapper,
    backgroundColor: colors.lime,
    borderRadius: 4
  },
  quickViewStyle: {
    position: 'absolute',
    left: 2,
    bottom: 2,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center'
  },
})