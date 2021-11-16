import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class ProductsInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.descriptionText}>{this.props.productInfo}</Text>
        <Text style={styles.descriptionText}>{this.props.productInfo}</Text>
        <Text style={styles.descriptionText}>{this.props.productInfo}</Text>
        <Text style={styles.descriptionText}>{this.props.productInfo}</Text>
        <Text style={styles.descriptionText}>{this.props.productInfo}</Text>
        <Text style={styles.descriptionText}>{this.props.productInfo}</Text>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    productInfo: state.productdetail.productsdetails.description,
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInfo);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  descriptionText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
  },
});
