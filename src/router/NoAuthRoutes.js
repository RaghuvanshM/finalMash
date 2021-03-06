import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeControlScreen from '../screens/Home';
import DetailsScreen from '../screens/SplashScreen';
import WellnessScreen from '../screens/Login';
import Profile from '../screens/Profile';
import {colors} from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';
import Order from '../screens/Order';
import OrderDetail from '../screens/OrderDetails';
import MyCart from '../screens/MyCart';
import Checkout from '../screens/Checkout';
import SearchProducts from '../screens/SearchProducts';
import Search from '../screens/Search/Search';
import ProductDetail from '../screens/ProudectDetail';
import MyTabs from './MaterialTop';
import MyAddress from '../screens/Address/Myaddress';
import AddAddress from '../screens/Address/AddAddress';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CategoryScreen from '../screens/Category';
import ProductOnCategory from '../screens/CategoryWiseProduct';
const Stack = createStackNavigator();
const StackNavigationScreens = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="HomeControl" component={TabNavigation} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="CheckOut" component={Checkout} />
      <Stack.Screen name="SearchProduct" component={SearchProducts} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="TopTab" component={MyTabs} />
      <Stack.Screen name="mycart" component={MyCart} />
      <Stack.Screen name="categorywiseproduct" component={ProductOnCategory} />
      <Stack.Screen name="myaddress" component={MyAddress} />
      <Stack.Screen name="addaddress" component={AddAddress} />
      <Stack.Screen name="productdetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.lime,
        inactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeControlScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, tintColor}) => (
            <View>
              <FontAwesome
                name={'home'}
                size={22}
                color={focused ? colors.lime : colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({focused, tintColor}) => (
            <View>
              <Fontisto
                name={'nav-icon-grid'}
                size={22}
                color={focused ? colors.lime : colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome
                name={'user'}
                size={22}
                color={focused ? colors.lime : colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={Order}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({focused, tintColor}) => (
            <View>
              <FontAwesome
                name={'shopping-bag'}
                size={22}
                color={focused ? colors.lime : colors.gray}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="mycart"
        component={MyCart}
        options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({focused, tintColor}) => (
            <View>
              <FontAwesome
                name={'shopping-cart'}
                size={22}
                color={focused ? colors.lime : colors.gray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <StackNavigationScreens />
    </NavigationContainer>
  );
}
