import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors'
import TopNavBar from '../../containers/TopNavBar/index';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';
import { windowWidth } from '../../utils/deviceInfo';
import RCTextInput from '../../containers/TextInput';
import Button from '../../containers/Button';
import { setData, getData, deleteData } from '../../utils/storage';
import { connect } from 'react-redux';
import { setToken } from '../../module/actions/login';

class Profile extends Component {
    constructor(props) {
        super(props)
    }
    logoutPress = () => {
        alert('hello')
        this.props.setUser(true)
        deleteData('tempUserId')
    }
    render() {
        return (
            <View style={styles.container}>
                <TopNavBar from={'profile'} onBackPress={() => this.props.navigation.navigate('Home')} navigation={this.props.navigation} title={'My Account'} />
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.keyboardAvoidingContainer}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    // innerRef={ref => { this.scroll = ref }}
                    keyboardShouldPersistTaps={'always'}
                    enableOnAndroid={true}
                >
                    <View style={styles.infoWrapper}>
                        <TouchableOpacity
                            // onPress={() => this.openImagePicker()}
                            style={styles.imageWrapper}
                            activeOpacity={0.8}
                        // disabled={isUploadAvtar}
                        >

                            <Icon name={'user'} size={30} color={colors.darkGray} />

                        </TouchableOpacity>
                        <View style={styles.rightWrapper}>
                            <Text style={styles.nameText} numberOfLines={1} ellipsizeMode={'tail'}>{'username'}</Text>
                            <TouchableOpacity
                                onPress={() => { this.logoutPress() }}
                            >
                                <Text style={styles.nameText} numberOfLines={1} ellipsizeMode={'tail'}>{'Login'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <RCTextInput
                        //  inputRef={(e) => { this.nameInput = e; }}
                        placeholder={'Name'}
                        //  value={name}
                        returnKeyType='next'
                        iconRight='user-o'
                        onChangeText={name => this.setState({ name })}
                        onSubmitEditing={() => { this.addressInput.focus(); }}
                    />
                    <RCTextInput
                        // inputRef={(e) => { this.addressInput = e; }}
                        placeholder={'Street Address'}
                        // value={address}
                        returnKeyType='next'
                        iconRight='location-on'
                    //onChangeText={address => this.setState({ address })}
                    //  onSubmitEditing={() => { this.areaInput.focus(); }}
                    />
                    <RCTextInput
                        //  inputRef={(e) => { this.areaInput = e; }}
                        placeholder={'Area'}
                        //   value={area}
                        returnKeyType='next'
                    //onChangeText={area => this.setState({ area })}
                    //  onSubmitEditing={() => { this.cityInput.focus(); }}
                    />
                    <RCTextInput
                        //  inputRef={(e) => { this.cityInput = e; }}
                        placeholder={'City'}
                        //   value={city}
                        returnKeyType='next'
                    // onChangeText={city => this.setState({ city })}
                    />
                    <Button
                        title={'save'}

                        style={styles.saveBtnStyle}

                    />
                </KeyboardAwareScrollView>
            </View>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    loginSuccess: (data) => dispatch(loginSuccess(data)),
    getCart: () => dispatch(getCart()),
    setUser: (data) => dispatch(setToken(data))
});
export default connect(null, mapDispatchToProps)(Profile);


const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: colors.paleGray
    },
    keyboardAvoidingContainer: {
        flexGrow: 1
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        backgroundColor: colors.lime,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        marginBottom: 10
    },
    imageWrapper: {
        height: 75,
        width: 75,
        borderRadius: 77.5,
        backgroundColor: colors.paleGray,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    rightWrapper: {
        marginLeft: 20,
        width: windowWidth - 130,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colors.white
    },
    saveBtnStyle: {
        width: '100%',
        backgroundColor: colors.darkGray,
        borderRadius: 0,
        marginBottom: 20
    }
})