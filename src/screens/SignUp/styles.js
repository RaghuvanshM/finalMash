import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  msgText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.darkBlack,
    fontFamily: 'Poppins-Regular',
    marginBottom: 15,
  },
  signupText: {
    fontSize: 16,
    color: colors.rubyRed,
    fontFamily: 'Poppins-SemiBold',
  },
  iconStyle: {
    right: 20,
  },
  backIconWrapper: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
