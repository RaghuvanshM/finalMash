import React from 'react'

import { Text,View,TouchableOpacity } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import { authUser } from '../module/actions';

const Login =()=>{
    const dispatch = useDispatch()
    const onLoginPress =()=>{
      dispatch(authUser(true))
    }
    return(
        <TouchableOpacity 
        onPress ={()=>onLoginPress()}
        style={{flex:1,justifyContent:'center'}}
        > 
        <Text style={{fontSize:30}}>this is login Screen</Text>
        </TouchableOpacity>
    )
}
export default Login;