import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import CartItem from '../../Components/CartItem';
import CategoreyItem from '../../Components/CategoreyItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartStrip from '../../Components/CartStrip';

class ProductOnCategory extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    let {data} = this.props.route.params;
    console.log(data);
    return (
      <>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <AntDesign name={'arrowleft'} size={30} />
          </TouchableOpacity>
          {data.length > 0 ? (
            <View>
              <FlatList
                data={data}
                keyExtractor={(item, index) => String(index)}
                renderItem={(item, index) => <CategoreyItem item={item} />}
              />
            </View>
          ) : (
            <View>
              <Text>No Data</Text>
            </View>
          )}
        </View>
        <View style={{marginBottom: 10}}>
          <CartStrip {...this.props} />
        </View>
      </>
    );
  }
}

export default ProductOnCategory;
