import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';
import {windowWidth} from '../utils/deviceInfo';

const styles = StyleSheet.create({
  warningWrapper: {
    alignSelf: 'center',
    width: windowWidth - 60,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  errorText: {
    width: windowWidth - 115,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    marginLeft: 10,
  },
});

const WrongInputWarning = ({warningText, style, issave}) => {
  return (
    <View
      style={[
        styles.warningWrapper,
        style,
        {backgroundColor: !issave ? colors.rubyRed : colors.green},
      ]}>
      <Icon
        name={issave ? 'check-all' : 'alert'}
        size={20}
        color={colors.white}
      />
      <Text style={styles.errorText}>{warningText}</Text>
    </View>
  );
};

export default WrongInputWarning;
