import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker';

import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RCTextInput from '../../containers/TextInput';
import {countries} from '../../utils/country';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../containers/Button';
import WrongInputWarning from '../../containers/WrongInputWarning';
import {validateEmail, validatePassword} from '../../utils/validators';
import axios from 'axios';
import {baseUrl} from '../../module/apiconstat';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      saving: false,
      errorText: null,
      isLoading: false,
      issave: false,
    };
  }
  valid = () => {
    const {email, password, phone, firstName, lastName} = this.state;
    if (firstName.trim() === '') {
      this.setState({errorText: 'Please Enter First Name'});
      this.firstNameInput.focus();
      return false;
    }
    if (lastName.trim() === '') {
      this.setState({errorText: 'Please Enter Last Name'});
      this.lastNameInput.focus();
      return false;
    }
    if (phone.trim() === '') {
      this.setState({errorText: 'Please Enter Phone Nuber'});
      this.phoneInput.focus();
      return false;
    }
    if (!validateEmail(email)) {
      const errorText =
        email.trim() === '' ? 'Please enter email' : 'Enter valid email';
      this.setState({errorText});
      this.emailInput.focus();
      return false;
    }
    if (!validatePassword(password)) {
      const errorText =
        password.trim() === ''
          ? 'Please enter password'
          : 'Enter atleast six character password';
      this.setState({errorText});
      this.passwordInput.focus();
      return false;
    }
    return true;
  };
  submit = async () => {
    let {firstName, lastName, email, phone, password} = this.state;
    console.log(this.state);
    // const url = 'http://siyakart.in/api/register';
    // let data = {
    //   full_name: 'raghu',
    //   phone: '7355163605',
    //   email: 'rm@gmail.com',
    //   password: '123456789',
    // };

    // try {
    //   let res = await axios({
    //     method: 'POST',
    //     url: url,
    //     data: data,
    //   });
    //   console.log(res);
    // } catch (eorr) {
    //   console.log(eorr);
    // }
    if (!this.valid()) {
      return;
    } else {
      let data = {
        full_name: firstName + lastName,
        phone: phone,
        email: email,
        password: password,
      };
      this.setState({saving: true, issave: true});
      try {
        axios({
          method: 'POST',
          url: `${baseUrl}register`,
          data: data,
        }).then(res => {
          console.log(res.data);
          if (res.data.status && res.data.status_code === 200) {
            this.setState({
              issave: true,
              saving: false,
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              password: '',

              errorText: 'Register Successfully! Go Back and Login Now',
            });
          } else {
            this.setState({
              issave: false,
              saving: false,
              errorText: 'Something Went Wrong !!',
            });
          }
        });
      } catch (error) {}
    }
  };
  render() {
    const {
      email,
      saving,
      issave,
      errorText,
      password,
      phone,
      firstName,
      lastName,
    } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backIconWrapper}
          onPress={() => this.props.navigation.goBack()}>
          <MaterialIcon name={'arrow-back'} size={20} color={colors.black} />
        </TouchableOpacity>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.keyboardAvoidingContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
          innerRef={ref => {
            this.scroll = ref;
          }}
          keyboardShouldPersistTaps={'always'}
          enableOnAndroid={true}>
          <Text style={styles.titleText}>Registration</Text>
          {errorText && (
            <WrongInputWarning warningText={errorText} issave={issave} />
          )}
          <RCTextInput
            inputRef={e => {
              this.firstNameInput = e;
            }}
            placeholder={'First Name'}
            value={firstName}
            returnKeyType="next"
            iconRight="user-o"
            onChangeText={text => this.setState({firstName: text})}
            onSubmitEditing={() => {
              this.lastNameInput.focus();
            }}
          />
          <RCTextInput
            inputRef={e => {
              this.lastNameInput = e;
            }}
            placeholder={'Last Name'}
            value={lastName}
            returnKeyType="next"
            iconRight="user-o"
            onChangeText={text => this.setState({lastName: text})}
            onSubmitEditing={() => {
              this.lastNameInput.focus();
            }}
          />
          <RCTextInput
            inputRef={e => {
              this.phoneInput = e;
            }}
            placeholder={'Phone Number'}
            value={phone}
            returnKeyType="next"
            iconRight="phone"
            onChangeText={text => this.setState({phone: text})}
            onSubmitEditing={() => {
              this.lastNameInput.focus();
            }}
          />
          <RCTextInput
            inputRef={e => {
              this.emailInput = e;
            }}
            placeholder={'Email'}
            value={email}
            returnKeyType="next"
            iconRight="email"
            onChangeText={text => this.setState({email: text})}
            onSubmitEditing={() => {
              this.emailInput.focus();
            }}
          />
          <RCTextInput
            inputRef={e => {
              this.passwordInput = e;
            }}
            secureTextEntry={true}
            placeholder={'Password'}
            value={password}
            returnKeyType="next"
            onChangeText={text => this.setState({password: text})}
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
          />

          <Button
            title={'sign up'}
            style={styles.buttonStyle}
            loading={this.state.saving}
            onPress={() => this.submit()}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backIconWrapper: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidingContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    color: colors.darkBlack,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 15,
  },
  buttonStyle: {
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

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
  marginBottom: 10,
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...pickerStyle,
  },
  inputAndroid: {
    ...pickerStyle,
  },
  headlessAndroidPicker: {
    marginHorizontal: 20,
  },
  iconContainer: {
    top: 10,
    right: 38,
  },
});
