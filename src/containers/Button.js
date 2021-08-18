import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform, ActivityIndicator, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lime,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        shadowRadius: 1,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOpacity: 0.54,
        shadowOffset: { width: 2, height: 2 },
      },
      android: {
        elevation: 2,
      }
    }),
    marginVertical: 40
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
	text: {
    fontSize: 15,
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase'
	},
	disabledStyle: {
		backgroundColor: '#e1e5e8'
	},
  icon: {
		marginLeft: 10,
    color: colors.white
	}
});

export default class Button extends React.PureComponent {
	render() {
		const {
			title, onPress, disabled, style, loading, iconRight
		} = this.props;
		return (
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabledStyle, style ]}
        activeOpacity={0.8}
        disabled={disabled || loading}
        onPress={onPress}
      >
        {loading ?
          <ActivityIndicator color={colors.white} />
        :
          <View style={styles.innerWrapper}>
            <Text style={styles.text}>{title}</Text>
            {iconRight ? <Icon name={iconRight} style={styles.icon} size={20} /> : null}
          </View>
        }
      </TouchableOpacity>
		);
	}
}
