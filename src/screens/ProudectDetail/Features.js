import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Features extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Text>Product Feature</Text>
      </View>
    );
  }
}

export default Features;
