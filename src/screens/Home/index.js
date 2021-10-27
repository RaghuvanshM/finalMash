import React from 'react';
import {colors} from '../../constants/colors';
import {windowWidth} from '../../utils/deviceInfo';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import TopNavBar from '../../containers/TopNavBar/index';
import SlideShow from '../../containers/SlideShow';
import categrory from '../../constants/data';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images} from '../../assets';
import Products from '../../containers/Products';

import {getSliderPhotos} from '../../module/actions/slider';
import {connect} from 'react-redux';
import {getCategories} from '../../module/actions/category';
import {getProducts} from '../../module/actions/products';
import axios from 'axios';
import GridProduct from '../../containers/GridProduct';
import CartStrip from '../../Components/CartStrip';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      currentXOffset: 0,
      cartItem: 0,
    };
  }
  handleRefresh = async () => {
    this.setState({refreshing: false});
  };
  getSliderImage = async () => {
    await this.props.getSliderPhotos();
  };
  async componentDidMount() {
    await this.getSliderImage();
    await this.props.getCategories();
    await this.props.getProducts();
  }

  handleScroll = event => {
    this.setState({currentXOffset: event.nativeEvent.contentOffset.x});
  };
  leftArrow = () => {
    const eachItemOffset =
      this.state.scrollViewWidth / (this.props.categories.length || 0);
    const currentXOffset = this.state.currentXOffset - eachItemOffset;
    this.categoryList.scrollToOffset({offset: currentXOffset, animated: true});
  };
  rightArrow = () => {
    const eachItemOffset =
      this.state.scrollViewWidth / (this.props.categories.length || 0);
    const currentXOffset = this.state.currentXOffset + eachItemOffset;
    this.categoryList.scrollToOffset({offset: currentXOffset, animated: true});
  };
  onPressProductItem = async item => {
    let singleProductDetail = await axios({
      method: 'GET',
      url: `http://siyakart.in/api/product-detials/${item.id}`,
    });
    if (
      singleProductDetail.data?.status_code == 200 &&
      singleProductDetail.data?.status
    ) {
      this.props.navigation.navigate('productdetail', {
        data: singleProductDetail?.data,
      });
    }
  };
  onMius = () => {
    let {cartItem} = this.state;
    this.setState({cartItem: cartItem + 1});
  };
  onAdd = () => {
    let {cartItem} = this.state;
    this.setState({cartItem: cartItem + 1});
  };
  renderSlider = () => {
    let {sliderPhotos} = this.props;
    return (
      <View style={styles.slideShowWrapper}>
        <SlideShow
          autoplay={true}
          horizontal={true}
          activeDotColor={colors.white}>
          {sliderPhotos &&
            sliderPhotos.map((slider, index) => {
              return (
                <View key={index}>
                  <Image
                    style={styles.slideImage}
                    source={{uri: slider.image}}
                    resizeMode={'stretch'}
                  />
                </View>
              );
            })}
        </SlideShow>
      </View>
    );
  };
  renderCategoryCircle = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.props.navigation.navigate('SearchProduct')}>
        <View style={styles.categoryWrapper}>
          <View style={styles.categoryImageWrapper}>
            {item.image && item.image !== '' ? (
              <Image
                source={{uri: item.image}}
                style={styles.categoryImage}
                resizeMode={'contain'}
              />
            ) : (
              <Text style={styles.categoryText}>No Image</Text>
            )}
          </View>
          <Text
            style={styles.categoryName}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderCategory = () => {
    if (categrory.sliderPhotos) {
      return (
        <View style={styles.categoriesWrapper}>
          <TouchableOpacity
            style={styles.leftIconWrapper}
            onPress={() => this.leftArrow()}>
            <Icon name={'chevron-left'} size={20} color={colors.black} />
          </TouchableOpacity>
          <FlatList
            ref={ref => (this.categoryList = ref)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            removeClippedSubviews
            style={styles.flatList}
            contentContainerStyle={{flexGrow: 1}}
            data={this.props.categories}
            renderItem={item => this.renderCategoryCircle(item)}
            bounces={false}
            onContentSizeChange={(w, h) => this.setState({scrollViewWidth: w})}
            scrollEventThrottle={16}
            onScroll={e => this.handleScroll(e)}
          />
          <TouchableOpacity
            style={styles.rightIconWrapper}
            onPress={() => this.rightArrow()}>
            <Icon name={'chevron-right'} size={20} color={colors.black} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyCategoryWrapper}>
          <Text style={styles.emptyCategoryText}>No category found</Text>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TopNavBar from={'home'} navigation={this.props.navigation} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.handleRefresh()}
            />
          }
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewStyle}>
          {this.renderSlider()}
          {this.renderCategory()}
          <View style={styles.titleWrapper}>
            <Image source={images.titleImageLeft} />
            <Text style={styles.titleText}>Products</Text>
            <Image source={images.titleImageRight} />
          </View>
          {/* <Products {...this.props} />
          <Products {...this.props} />
          <Products {...this.props} /> */}
          {/* {true
            ? this.props.products.map((item, index) => {
                return (
                  <View key={String(index)}>
                    <GridProduct
                      item={item}
                      onPress={() => {
                        this.onPressProductItem(item);
                      }}
                    />
                  </View>
                );
              })
            : !this.state.refreshing && (
                <View style={styles.emptyBag}>
                  <Image source={images.shoppingBag} styles={styles.bagImg} />
                  <Text style={styles.emptyMsgText}>Oops!</Text>
                  <Text style={styles.emptyMsgSubText}>No products found</Text>
                </View>
              )} */}
          <View style={styles.flatlistStyle}>
            <FlatList
              data={this.props.products}
              renderItem={item => (
                <GridProduct
                  item={item}
                  {...this.props}
                  onAdd={() => {
                    this.onAdd();
                  }}
                  onMinus={() => {
                    this.onMius();
                  }}
                  cartItem={this.state.cartItem}
                />
              )}
              keyExtractor={(_, index) => String(index)}
              numColumns={3}
            />
          </View>
        </ScrollView>
        <CartStrip />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    sliderPhotos: state.slider.photos,
    categories: state.category.categories,
    products: state.product.products,
  };
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getSliderPhotos: () => dispatch(getSliderPhotos()),
  getProducts: () => dispatch(getProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    flexGrow: 1,
  },
  slideShowWrapper: {
    backgroundColor: colors.paleGray,
    height: 150,
    width: windowWidth - 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  slideImage: {
    height: 150,
    width: windowWidth - 20,
  },
  categoriesWrapper: {
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: 10,
  },
  leftIconWrapper: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    left: 0,
  },
  flatList: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  categoryWrapper: {
    width: 78,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  categoryImageWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  categoryText: {
    fontSize: 18,
    color: colors.lightGray,
    fontFamily: 'Poppins-SemiBold',
  },
  categoryName: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    textAlign: 'center',
    flexWrap: 'wrap',
    paddingTop: 10,
    textTransform: 'capitalize',
    lineHeight: 14,
  },
  rightIconWrapper: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 0,
  },
  emptyCategoryWrapper: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    marginTop: 10,
  },
  emptyCategoryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.gray,
    textAlign: 'center',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  emptyMsgWrapper: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyMsgText: {
    fontSize: 24,
    fontFamily: 'Poppins-bold',
    color: colors.lightGray,
    textAlign: 'center',
    marginTop: 10,
  },
  emptyMsgSubText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.lightGray,
    textAlign: 'center',
  },
  emptyBag: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  flatlistStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
