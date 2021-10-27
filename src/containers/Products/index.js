import React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../assets';
import {colors} from '../../constants/colors';
import {windowWidth} from '../../utils/deviceInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import FastImage from 'react-native-fast-image';

const imageurl = [
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
  },
];
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      isVisible: false,
      productImages: [],
    };
  }
  openProductImageSlider = () => {
    this.setState({isVisible: true});
  };
  onClose = () => {
    this.setState({
      containerisVisible: false,
      productImages: [],
      isVisible: false,
    });
  };
  renderProductImageSlider = () => {
    return (
      <Modal
        style={styles.modal}
        isVisible={this.state.isVisible}
        onBackButtonPress={this.onClose}
        onSwipeComplete={this.onClose}
        backdropOpacity={1}>
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity
            style={styles.closeContainer}
            activeOpacity={0.8}
            onPress={() => this.onClose()}>
            <MaterialCommunityIcon name={'close'} size={30} color={'black'} />
          </TouchableOpacity>
          <ImageViewer
            imageUrls={imageurl}
            enableImageZoom={false}
            saveToLocalByLongPress={false}
            enableSwipeDown={false}
            loadingRender={() => (
              <ActivityIndicator
                color={colors.white}
                size={'large'}
                style={styles.indicator}
              />
            )}
            renderImage={props => <FastImage {...props} />}
          />
        </SafeAreaView>
      </Modal>
    );
  };
  renderProducts = item => {
    let {thumbnail, name, description, price, discount_price} = item;
    return (
      <TouchableOpacity
        style={[styles.productWrapper]}
        onPress={this.props.onPress}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="contain"
            source={{uri: thumbnail}}
            style={styles.productImage}
          />
        </View>
        <View style={styles.rightWrapper}>
          <Text
            style={[styles.nameText]}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {name}
          </Text>
          <Text
            style={styles.descriptionText}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {description}
          </Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.priceText}>&#8377;{discount_price} </Text>
            <Text style={styles.strikeText}>&#8377;{price}</Text>
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
        <TouchableOpacity
          style={styles.quickViewStyle}
          onPress={() => {
            this.openProductImageSlider();
          }}>
          <MaterialCommunityIcon
            name={'arrow-expand-all'}
            size={12}
            color={colors.red}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  render() {
    let {item} = this.props;
    return (
      <View style={{flex: 1}}>
        {this.renderProducts(item)}
        {this.state.isVisible && this.renderProductImageSlider()}
      </View>
    );
  }
}
export default Products;

const wrapper = {
  height: 36,
  width: 35,
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  productWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    height: 120,
    backgroundColor: colors.white,
  },
  imageWrapper: {
    height: 100,
    width: 100,
    backgroundColor: colors.paleGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    height: 100,
    width: 100,
  },
  rightWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: windowWidth - 150,
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
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    color: colors.darkBlack,
    fontWeight: 'bold',
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
  quantityWrapper: {
    flexDirection: 'row',
  },

  minusQuantityView: {
    ...wrapper,
    borderWidth: 1,
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 16,
    color: colors.darkBlack,
    fontFamily: 'Poppins-SemiBold',
  },
  quantityView: {
    ...wrapper,
  },
  plusQuantityView: {
    ...wrapper,
    backgroundColor: colors.lime,
    borderRadius: 4,
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
    justifyContent: 'center',
  },
  modal: {
    margin: 0,
  },
  safeArea: {
    flex: 1,
  },
  closeContainer: {
    height: 50,
    width: 50,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    flex: 1,
  },
});
