import React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Voice from '@react-native-community/voice';
import {colors} from '../../constants/colors';
import LottieView from 'lottie-react-native';
import {windowWidth} from '../../utils/deviceInfo';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fether from 'react-native-vector-icons/Feather';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      result: [],
      startRecord: false,
    };
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }
  onSpeechEndHandler = e => {
    console.log('Speech End handler>>>', e);
  };
  onSpeechStartHandler = e => {
    console.log('onSpeech start >>>>', e);
  };
  onSpeechResultsHandler = e => {
    let text = e.value[0];
    this.setState({searchText: text, startRecord: false});
    console.log(e.value[0]);
    this.handleTextChange(e.value[0]);
  };
  startRecording = () => {
    this.setState({startRecord: true});
    try {
      Voice.start('en-US');
    } catch (e) {
      console.log(e);
    }
  };
  handleTextChange = async text => {
    console.log(text);
    if (text !== '') {
      const url = `http://siyakart.in/api/search-product/${text}`;
      let searchResult = await axios({
        method: 'GET',
        url: url,
      });
      console.log(searchResult);
      if (searchResult?.data?.data) {
        console.log(searchResult?.data?.data);
        this.setState({result: searchResult?.data?.data});
      }
    } else {
      this.setState({result: []});
    }
  };
  handleSearch = async text => {
    alert('Search');
  };
  render() {
    const {searchText} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.textInputWrraper}>
            <TouchableOpacity
              style={styles.searchIconnWrapper}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Fether name={'arrow-left'} size={30} />
            </TouchableOpacity>
            <TextInput
              placeholder={'Search......'}
              style={[styles.inputWrraper, {fontSize: 18}]}
              value={searchText}
              onChangeText={text => {
                this.setState({searchText: text});
                this.handleTextChange();
              }}
            />
            <TouchableOpacity
              style={{
                height: 40,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                this.startRecording();
              }}>
              <FontAwesome name={'microphone'} size={26} />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={this.state.result}
          keyExtractor={(_, index) => String(index)}
          renderItem={({item}) => {
            console.log(item);
            return (
              <View style={styles.searchContainer}>
                <Image
                  resizeMode={'contain'}
                  style={{height: 40, width: 50}}
                  source={{uri: item.thumbnail}}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
export default Search;
const header = {
  flexDirection: 'row',
  width: '100%',
  height: 60,
  backgroundColor: colors.white,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 25,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.plaeGray,
  },
  headerWrapper: {
    ...header,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  textInputWrraper: {
    height: 45,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
  },
  inputWrraper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  textInputText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: colors.lightGray,
  },
  searchIconnWrapper: {
    height: 40,
    justifyContent: 'center',
    marginLeft: 5,
    width: 30,
  },
  searchContainer: {
    borderBottomWidth: 0.25,
    borderBottomColor: 'grey',
    padding: 15,
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  titleText: {
    marginLeft: 20,
    fontSize: 15,
  },
});
