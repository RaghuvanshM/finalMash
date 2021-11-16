import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import CategoryView from '../../Components/CategoryView';
import axios from 'axios';

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
    };
  }
  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryText}>All Categories</Text>
        </View>
        <FlatList
          data={this.props.categories}
          numColumns={3}
          renderItem={(item, index) => (
            <CategoryView {...this.props} item={item} />
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.category.categories,
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 20,
  },
  categoryTextContainer: {
    borderBottomWidth: 1.5,
    marginRight: 3.6,
    padding: 10,
    borderBottomColor: '#ececec',
  },
});
