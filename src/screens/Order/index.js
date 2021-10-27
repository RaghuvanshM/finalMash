import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/colors';
import TopNavBar from '../../containers/TopNavBar/index';
import {RectButton} from 'react-native-gesture-handler';
import {getOrders} from '../../module/actions/order';
import {connect} from 'react-redux';
import Spinner from '../../containers/Spinner';
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refreshing: false,
    };
  }
  async componentDidMount() {
    await this.props.getOrders(12);
    this.setState({loading: false});
  }
  handleRefresh = async () => {
    this.setState({refreshing: true});
    await this.props.getOrders();
    this.setState({refreshing: false});
  };
  emptyView = () => {
    return (
      <View style={styles.container}>
        <TopNavBar
          onBackPress={() => this.props.navigation.navigate('Home')}
          navigation={this.props.navigation}
          title={'My Orders'}
        />
        <View style={styles.emptyWrapper}>
          <Icon name={'clipboard-text'} size={100} color={colors.lightGray} />
          <Text style={styles.emptyText}>No orders yet!</Text>
        </View>
      </View>
    );
  };
  renderOrder = ({item, index}) => {
    return (
      <RectButton
        style={[styles.orderWrapper]}
        activeOpacity={0.1}
        onPress={() => this.props.navigation.navigate('OrderDetail')}>
        <View style={styles.row}>
          <Text style={styles.numberText}>{`Order No ${
            index < 9 ? `#0${index + 1}` : `#${index + 1}`
          }`}</Text>

          <Text style={styles.priceText}>&#8377;{item.price}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dateText}>{item.created_date}</Text>
          <Text style={styles.discountText}>You Saved: &#36;{'20'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.numberText}>{item.name}</Text>
          <View style={[styles.statusWrapper]}>
            <Text style={styles.statusText}>{'Cancel'}</Text>
          </View>
        </View>
      </RectButton>
    );
  };
  renderFooter = () => {
    if (!this.props.orderLoading) {
      return null;
    } else {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size={'large'} color={colors.lime} />
        </View>
      );
    }
  };
  loadingView = () => (
    <View style={styles.container}>
      <TopNavBar
        onBackPress={() => this.props.navigation.navigate('Home')}
        navigation={this.props.navigation}
        title={'My Orders'}
      />
      <Spinner />
    </View>
  );
  render() {
    let {orders} = this.props;
    let {loading} = this.state;
    if (loading) {
      return this.loadingView();
    }
    if (!this.state.refreshing && orders && orders.length === 0) {
      return this.emptyView();
    }

    return (
      <View style={styles.container}>
        <TopNavBar
          navigation={this.props.navigation}
          title={'My Orders'}
          onBackPress={false}
        />
        {orders && orders.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => String(index)}
            data={orders}
            renderItem={item => this.renderOrder(item)}
            ListFooterComponent={() => this.renderFooter()}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.handleRefresh()}
              />
            }
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderLoading: state.order.loading,
    orders: state.order.orders,
  };
};
const mapDispatchToProps = dispatch => ({
  getOrders: args => dispatch(getOrders(args)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGray,
  },
  orderWrapper: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: colors.white,
    height: 95,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 14,
    color: colors.darkBlack,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.25,
    lineHeight: 18,
  },
  priceText: {
    fontSize: 16,
    color: '#252525',
    lineHeight: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: colors.darkGray,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.25,
  },
  discountText: {
    fontSize: 13,
    color: colors.red,
  },
  statusWrapper: {
    height: 25,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    backgroundColor: 'red',
  },
  statusText: {
    fontSize: 13,
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
  loadingWrapper: {
    marginBottom: 10,
  },
  emptyWrapper: {
    flex: 1,
    backgroundColor: colors.paleGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Poppins-Regular',
  },
});
