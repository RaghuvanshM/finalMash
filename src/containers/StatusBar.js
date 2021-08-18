import React from 'react';
import { StatusBar as StatusBarRN, StyleSheet, View } from 'react-native';
import { isIOS } from '../utils/deviceInfo';
import { colors } from '../constants/colors';

const StatusBar = React.memo(() => {
  if(isIOS) {
    return (
      <View style={[styles.statusbarWrapper, { height:StatusBarRN.currentHeight }]}>
    	  <StatusBarRN backgroundColor={colors.white} barStyle='dark-content' />
      </View>
    )
  }
  return <StatusBarRN backgroundColor={colors.white} barStyle='dark-content' />
});

export default StatusBar;

const styles = StyleSheet.create({
  statusbarWrapper: {
    width: "100%",
    backgroundColor: colors.white
  }
})
