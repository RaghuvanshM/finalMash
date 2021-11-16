import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import RCTextInput from '../containers/TextInput';

const {height, width} = Dimensions.get('window');
class ActionSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alignment: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapAddressContainer}>
          <Feather size={25} name={'map-pin'} color={'#6c6c6c'} />
          <View style={styles.myaddress}>
            <Text style={styles.addressTitle}>New Ashok Nagar</Text>
            <Text numberOfLines={1} style={styles.addressdescription}>
              Block c 2 New ashok nagar new delhi Block c 2 New ashok nagar new
              delhi
            </Text>
          </View>
        </View>
        <ScrollView>
          <RCTextInput placeholder={'House No/Flat No/Floor/Tower'} />
          <RCTextInput placeholder={'Street/Society/Landmark'} />
        </ScrollView>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Address</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default ActionSheet;
const styles = StyleSheet.create({
  container: {
    height: height / 3,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 25,
  },
  grabber: {
    width: 60,
    borderTopWidth: 7,
    borderTopColor: 'red',
    alignSelf: 'center',
  },
  drageUpView: {
    height: 30,
    width: 30,
    backgroundColor: 'red',
    position: 'absolute',
    top: -30,
    borderRadius: 20,
  },
  mapAddressContainer: {
    borderBottomWidth: 0.25,
    borderBottomColor: 'grey',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  myaddress: {
    marginLeft: 20,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  addressdescription: {
    fontFamily: 'Poppins-Regular',
  },
  saveButton: {
    height: 40,
    backgroundColor: '#cccccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
});
