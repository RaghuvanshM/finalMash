import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
	indicator: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.paleGray
	}
});

const Spinner = () => <ActivityIndicator style={styles.indicator} color={colors.lime} size={'large'} />;

export default Spinner;
