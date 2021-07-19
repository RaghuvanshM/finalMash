import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

import HomeScreen from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUp from '../screens/SignUp';
import CustomDrawerContentComponent from './CustomDrawer';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
function NoauthStack() {
   const MainDrawer = () => {
        return ( 
          <Drawer.Navigator 
            initialRouteName="HomeScreen"
            drawerContentOptions={{
              activeBackgroundColor: '#ebf3fd',
              inactiveTintColor: 'black',
              activeTintColor: 'black',
            }}
            drawerStyle={{
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}>
            <Drawer.Screen name="home" component={HomeScreen} />
            <Drawer.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} /> 
        
          </Drawer.Navigator>
        );
      };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginScreen" headerMode="screen">
                <Stack.Screen name="drawer" component={MainDrawer} options={{ headerShown: false }} />
                {/* <Stack.Screen name="studentSignupScreen" component={StudentSignup} options={{headerShown:false}} />
            <Stack.Screen name="linkAccountScreen" component={LinkAccount} options={{headerShown:false}} />
            <Stack.Screen name="parentSignupScreen" component={ParentSignup} options={{headerShown:false}} />
            <Stack.Screen name="loginScreen" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="studentLoginScreen" component={StudentLogin} options={{headerShown:false}} />            
            <Stack.Screen name="parentParentScreen" component={ParentLogin} options={{headerShown:false}} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NoauthStack;
