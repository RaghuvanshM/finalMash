import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
function authStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginscreen"
             headerMode={'none'}
            >
                <Stack.Screen name="loginscreen" component={Login} />
                <Stack.Screen name="signupScreen" component={Signup} />
          {/* <Stack.Screen name="linkAccountScreen" component={LinkAccount} options={{headerShown:false}} />
            <Stack.Screen name="parentSignupScreen" component={ParentSignup} options={{headerShown:false}} />
            <Stack.Screen name="loginScreen" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="studentLoginScreen" component={StudentLogin} options={{headerShown:false}} />            
            <Stack.Screen name="parentParentScreen" component={ParentLogin} options={{headerShown:false}} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default authStack;
