import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedbackBase,
} from 'react-native';
import TopNavBar from '../../containers/TopNavBar/index';
import {colors} from '../../constants/colors';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Products from '../../containers/Products';
import Modal from 'react-native-modal';

class SearchProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      sortModalVisible: false,
      sortType: '',
      refreshing: false,
    };
  }

  openModal = () => {
    this.setState({sortModalVisible: true});
  };
  onCloseModal = () => {
    this.setState({sortModalVisible: false});
  };
  handleSort = () => {};
  renderOption = (text, type) => {
    const {sortType} = this.state;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.optionWrapper}
        disabled={type === sortType}
        onPress={() => {
          this.handleSort();
        }}>
        <Text style={styles.optionText}>{text}</Text>
        <View
          style={[
            styles.radioButtonWrapper,
            {borderColor: type === sortType ? colors.lime : colors.black},
          ]}>
          {type === sortType && <View style={styles.innerWrapper} />}
        </View>
      </TouchableOpacity>
    );
  };
  renderModal = () => {
    return (
      <Modal
        style={styles.modal}
        isVisible={this.state.sortModalVisible}
        onBackdropPress={this.onCloseModal}
        onBackButtonPress={this.onCloseModal}
        onSwipeComplete={this.onCloseModal}
        swipeDirection={['down']}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>sort by</Text>
          </View>
          <View style={styles.optionsWrapper}>
            {this.renderOption('Price -- Low to High', 'LTH')}
            {this.renderOption('Price -- High to Low', 'HTL')}
          </View>
        </SafeAreaView>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <TopNavBar
          navigation={this.props.navigation}
          from="products"
          title={'Title'}
        />

        <>
          <View style={styles.rowWrapper}>
            <Text style={styles.totalText}>{`3`} Items</Text>
            <RectButton
              activeOpacity={0.1}
              style={styles.sortButtonStyle}
              onPress={() => this.openModal()}>
              <Icon
                name={'sort-amount-desc'}
                size={16}
                color={colors.darkBlack}
              />
              <Text style={styles.sortText}>Sort by</Text>
            </RectButton>
          </View>
          <ScrollView>
            <Products {...this.props} />
            <Products {...this.props} />
            <Products {...this.props} />
          </ScrollView>
        </>
        {this.renderModal()}
      </View>
    );
  }
}
export default SearchProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGray,
  },
  rowWrapper: {
    flexDirection: 'row',
    marginVertical: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 15,
    color: colors.darkGray,
    fontFamily: 'Poppins-Regular',
  },
  sortButtonStyle: {
    height: 36,
    width: 95,
    backgroundColor: colors.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sortText: {
    fontSize: 14,
    color: colors.darkBlack,
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
  },
  safeArea: {
    width: '100%',
    backgroundColor: colors.white,
  },
  titleWrapper: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  titleText: {
    fontSize: 14,
    color: colors.darkGray,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'uppercase',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  optionsWrapper: {
    paddingVertical: 8,
  },
  optionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  radioButtonWrapper: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWrapper: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.lime,
  },
});
