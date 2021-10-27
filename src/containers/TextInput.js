import React from 'react';
import {TouchableOpacity, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';
export default class RCTextInput extends React.PureComponent {
  state = {
    showPassword: false,
  };
  renderIconRight = iconRight => {
    const {props} = this;
    if (iconRight) {
      let IconComponent = Icon;
      if (iconRight && (iconRight === 'location-on' || iconRight === 'email'))
        IconComponent = MaterialIcon;
      return (
        <IconComponent
          name={iconRight}
          style={[styles.icon, props.iconStyle]}
          size={20}
        />
      );
    }
    return null;
  };
  tooglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}));
  };
  iconPassword = () => {
    const {showPassword} = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.tooglePassword()}
        style={styles.icon}>
        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} />
      </TouchableOpacity>
    );
  };
  render() {
    const {
      error,
      iconRight,
      secureTextEntry,
      placeholder,
      value,
      inputRef,
      iconStyle,
      ...inputProps
    } = this.props;
    const {showPassword} = this.state;
    return (
      <View style={styles.inputContainer}>
        <View style={styles.wrap}>
          <TextInput
            ref={inputRef}
            style={[styles.input, iconRight && styles.inputIconRight]}
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            placeholderTextColor={colors.darkGray}
            secureTextEntry={secureTextEntry && !showPassword}
            value={value}
            {...inputProps}
          />
          {this.renderIconRight(iconRight)}
          {secureTextEntry ? this.iconPassword() : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    fontSize: 14,
    color: colors.darkBlack,
    fontFamily: 'Poppins-Regular',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  wrap: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 14,
    right: 15,
    color: '#2a2a2a',
  },
});
