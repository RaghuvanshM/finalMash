import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colors';
import {images} from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {windowWidth} from '../../utils/deviceInfo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
const TopNavBar = React.memo(
  ({from, title, onBackPress, onPress, navigation}) => {
    if (from && from === 'home') {
      return (
        <View style={styles.headerWrapper}>
          <View style={styles.textInputWrraper}>
            <View style={styles.searchIconnWrapper}>
              <SearchIcon name={'search'} size={25} color={'#a6a6a6'} />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.inputWrraper}
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Text style={styles.textInputText}>
                Search Products and categories
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
              }}>
              <FontAwesome name={'microphone'} size={20} />
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.headerStyle}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.backIconWrapper} onPress={onPress}>
            <MaterialIcon name={'arrow-back'} size={20} color={colors.black} />
          </TouchableOpacity>
          <Text
            style={styles.titleText}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {title}
          </Text>
        </View>
        {from && (from === 'products' || from === 'profile') && (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconWrapper}
              activeOpacity={0.4}
              onPress={() => navigation.navigate('Search')}>
              <Icon name={'search'} size={20} color={colors.black} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  },
);

export default TopNavBar;

const header = {
  flexDirection: 'row',
  width: '100%',
  height: 60,
  backgroundColor: colors.white,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 25,
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...header,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    height: 40,
    width: 100,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 50,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },
  headerStyle: {
    ...header,
    paddingLeft: 5,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    width: windowWidth - 140,
    textTransform: 'capitalize',
  },
  textInputWrraper: {
    height: 45,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
  },
  searchIconnWrapper: {
    height: 40,
    justifyContent: 'center',
    marginLeft: 5,
    width: 30,
  },
  inputWrraper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  textInputText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: colors.lightGray,
  },
});
