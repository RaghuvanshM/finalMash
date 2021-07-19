import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from '../Components/Colors';
import { useNavigation } from '@react-navigation/native';
const CustomDrawerContentComponent = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: Colors }}
            onPress={()=>{navigation.navigate('signup')}}
            >


                <Text>this is CustomDrawer</Text>
            </TouchableOpacity>
        </View>
    )

}
export default CustomDrawerContentComponent;