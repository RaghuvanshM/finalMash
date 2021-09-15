import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { images } from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { windowWidth } from '../../utils/deviceInfo';

const TopNavBar = React.memo(({ from, title, onBackPress, navigation }) => {
  if (from && from === 'home') {
    return (
      <View style={styles.headerWrapper}>
        <Image source={images.logo}
          resizeMode={'contain'}
          style={styles.logo}
        />
       

      </View>
    )
  }
  return (
    <View style={styles.headerStyle}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.backIconWrapper}
          activeOpacity={0.4}
          onPress={() => onBackPress ? onBackPress() : navigation.goBack()}
        >
          <MaterialIcon name={'arrow-back'} size={20} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>

      </View>
      {(from && (from === 'products' || from === 'profile')) && (
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconWrapper}
            activeOpacity={0.4}
            onPress={() =>  navigation.navigate('Search')}
          >
            <Icon name={'search'} size={20} color={colors.black} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
})

export default TopNavBar;

const header = {
  flexDirection: 'row',
  width: '100%',
  height: 60,
  backgroundColor: colors.white,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,

}

const styles = StyleSheet.create({
  headerWrapper: {
    ...header,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  logo: {
    height: 40,
    width: 100
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    height: 50,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    ...header,
    paddingLeft: 5,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    width: windowWidth - 140,
    textTransform: 'capitalize'
  }
})