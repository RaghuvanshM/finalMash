import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RCTextInput from '../../containers/TextInput';
import { connect } from 'react-redux';
import styles from '../SignUp/styles';
import { colors } from '../../constants/colors';
// import { getCart } from '../../actions/cart';
import { setToken } from '../../module/actions/login';
import Spinner from '../../containers/Spinner';
import Button from '../../containers/Button';
import Toast from '../../containers/Toast';
import WrongInputWarning from '../../containers/WrongInputWarning';
import { validateEmail } from '../../utils/validators';
import { setData, getData, deleteData } from '../../utils/storage';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        loading: false,
        errorText: null,
        isLoading: false
      };
     
  };

  valid = () => {
		const {
		    email, password
		} = this.state;
    if (!validateEmail(email)) return false
    if (password.trim() === '') return false
    return true
	}

  submit=()=>{  
   this.props.setUser(false)
   setData('tempUserId', 'true')
  }
  render() {
    const { email, password, isLoading, errorText } = this.state
    const { navigation } = this.props

    if(isLoading) return <Spinner />
    return (
      <View style={styles.container}>
     
        <KeyboardAwareScrollView
  				contentContainerStyle={styles.keyboardAvoidingContainer}
  				bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          enableOnAndroid={true}
  			>
            <Text style={styles.titleText}>Login</Text>
            {errorText && (
              <WrongInputWarning warningText={errorText} />
            )}
            <RCTextInput
              inputRef={(e) => { this.emailInput = e; }}
              placeholder={'Email'}
            //  value={email}
              returnKeyType='next'
              iconRight='email'
            //  onChangeText={email => this.setState({ email })}
             // onSubmitEditing={() => { this.passwordInput.focus(); }}
            />
            <RCTextInput
              inputRef={(e) => { this.passwordInput = e; }}
              secureTextEntry={true}
              placeholder={'Password'}
            //  value={password}
              returnKeyType='next'
            //  onChangeText={password => this.setState({ password })}
            //  onSubmitEditing={() => this.submit()}
            />
            <Button
              title={'sign in'}
              onPress={() => this.submit()}
              // disabled={!this.valid()}
              // loading={this.state.loading}
              style={styles.buttonStyle}
            />
            <Text style={styles.msgText}>Don't have an account ? <Text style={styles.signupText} onPress={() => navigation.navigate('signupScreen')}>Sign up Now !</Text></Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginSuccess: (data) => dispatch(loginSuccess(data)),
  getCart: () => dispatch(getCart()),
  setUser:(data)=>dispatch(setToken(data))
});

export default connect(null, mapDispatchToProps)(Login);
