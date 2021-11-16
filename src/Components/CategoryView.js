import axios from 'axios';
import React from 'react';
import {Component} from 'react';

import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

class CategoryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: [],
    };
  }
  componentDidMount() {}

  singleCategoryPress = item => {
    try {
      axios({
        method: 'GET',
        url: `https://siyakart.in/api/category-product/${item.item.id}`,
      }).then(res => {
        if (res.data.data) {
          this.props.navigation.navigate('categorywiseproduct', {
            data: res.data.data,
          });
        } else {
          this.props.navigation.navigate('categorywiseproduct', {
            data: [],
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
    //this.props.navigation.navigate('categorywiseproduct');
  };
  render() {
    let {item} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container}
        onPress={() => {
          this.singleCategoryPress(item);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              height: 100,
              width: '80%',
            }}
            resizeMode={'contain'}
            source={{uri: item?.item?.image}}
          />
          <Text numberOfLines={1} style={styles.textStyle}>
            {item?.item?.name}
          </Text>
        </View>
        <View
          style={{
            width: 1.5,
            height: '100%',
            backgroundColor: '#ececec',
          }}></View>
      </TouchableOpacity>
    );
  }
}
export default CategoryView;
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '33%',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ececec',
  },
  textStyle: {
    fontSize: 16,
    color: '#5f5f5f',
  },
});
