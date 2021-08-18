import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {Picker} from '@react-native-picker/picker';

import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RCTextInput from '../../containers/TextInput';
import { countries } from '../../utils/country';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../containers/Button';

class SignUp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backIconWrapper}
                activeOpacity={0.4}
                onPress={() => this.props.navigation.goBack()}
            >
                <MaterialIcon name={'arrow-back'} size={20} color={colors.black} />
            </TouchableOpacity>
            <KeyboardAwareScrollView
          contentContainerStyle={styles.keyboardAvoidingContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
          innerRef={ref => { this.scroll = ref }}
          keyboardShouldPersistTaps={'always'}
          enableOnAndroid={true}
        >

          <Text style={styles.titleText}>Registration</Text>
          <RCTextInput
            inputRef={(e) => { this.nameInput = e; }}
            placeholder={'Name'}
            // value={name}
            returnKeyType='next'
            iconRight='user-o'
            // onChangeText={name => this.setState({ name })}
             onSubmitEditing={() => { this.emailInput.focus(); }}
          />
            <RCTextInput
            inputRef={(e) => { this.emailInput = e; }}
            placeholder={'Email'}
            // value={email}
            returnKeyType='next'
            iconRight='email'
           // onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => { this.passwordInput.focus(); }}
          />
            <RCTextInput
            inputRef={(e) => { this.passwordInput = e; }}
            secureTextEntry={true}
            placeholder={'Password'}
           // value={password}
            returnKeyType='next'
           // onChangeText={password => this.setState({ password })}
            onSubmitEditing={() => { this.addressInput.focus(); }}

          />
          <RCTextInput
            inputRef={(e) => { this.addressInput = e; }}
            placeholder={'Street Address'}
          //  value={address}
            returnKeyType='next'
            iconRight='location-on'
           // onChangeText={address => this.setState({ address })}
            onSubmitEditing={() => { this.areaInput.focus(); }}
          />
             <RCTextInput
            inputRef={(e) => { this.areaInput = e; }}
            placeholder={'Area'}
           // value={area}
            returnKeyType='next'
          //  onChangeText={area => this.setState({ area })}
            onSubmitEditing={() => { this.cityInput.focus(); }}
          />
            <RCTextInput
            inputRef={(e) => { this.cityInput = e; }}
            placeholder={'City'}
          //  value={city}
            returnKeyType='next'
           // onChangeText={city => this.setState({ city })}
          />
           <Picker
    				style={pickerSelectStyles}
    				// value={country}
    				useNativeAndroidPickerStyle={false}
            placeholder={{
              label: 'Country',
              value: null,
              color: '#999999'
            }}
    				onValueChange={country => {
             
            }}
    				items={countries}
            onUpArrow={() => {
              this.cityInput.focus()
            }}
            Icon={() => {
              return <Ionicons name="md-arrow-dropdown" size={20} color="#2a2a2a" />;
            }}
    			/>
           <Button
            title={'sign up'}
            style={styles.buttonStyle}
            // loading={this.state.saving}
            // onPress={() => this.submit()}
          />
        </KeyboardAwareScrollView>
        </View>
    )
}
}
export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backIconWrapper: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboardAvoidingContainer: {
        flexGrow: 1,
        justifyContent: 'center'
      },
      titleText: {
        fontSize: 24,
        color: colors.darkBlack,
        fontFamily: 'Poppins-SemiBold',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginVertical: 15
      },
      buttonStyle: {
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center'
      },
})

const pickerStyle = {
  height: 48,
  fontSize: 14,
  color: colors.darkBlack,
  fontFamily: 'Poppins-Regular',
  borderBottomWidth: 1,
  borderBottomColor: '#dddddd',
  paddingLeft: 10,
  paddingRight: 30,
  marginHorizontal: 20,
  marginBottom: 10
}
 const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...pickerStyle
  },
  inputAndroid: {
    ...pickerStyle
  },
  headlessAndroidPicker: {
    marginHorizontal: 20
  },
  iconContainer: {
    top: 10,
    right: 38
  }
});