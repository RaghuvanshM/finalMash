import React from 'react'

import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../module/actions';
const SignUp = () => {
    const dispatch = useDispatch()
    const onSignUpPress = () => {
        dispatch(authUser(false))
    }
    return (
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => { onSignUpPress() }}
        >
            <Text style={{ fontSize: 30 }}>this is SignUp Screen</Text>
        </TouchableOpacity>
    )
}
export default SignUp;