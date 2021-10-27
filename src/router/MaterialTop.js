import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Features from '../screens/ProudectDetail/Features';
import ProductsInfo from '../screens/ProudectDetail/Productinfo';
import {Text, View, StyleSheet} from 'react-native';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: '#df662f',
          height: 3,
          borderRadius: 10,
        },
        style: {backgroundColor: '#f2f2f2', borderColor: 'transparent'},
      }}>
      <Tab.Screen
        name="Features"
        component={Features}
        options={{
          tabBarLabel: ({focused}) => <TabLabel label={'Features'} />,
        }}
      />
      <Tab.Screen
        name="Info"
        component={ProductsInfo}
        options={{
          tabBarLabel: ({focused}) => <TabLabel label={'Info'} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
const TabLabel = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  labelText: {
    fontSize: 16,
    color: '#b4b4b4',
    fontFamily: 'Poppins-Regular',
    fontWeight: '800',
  },
});
