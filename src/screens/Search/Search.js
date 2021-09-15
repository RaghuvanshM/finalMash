import React from "react";
import { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { colors } from '../../constants/colors';
import { windowWidth } from '../../utils/deviceInfo';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    }
    handleTextChange = (text) => {
        this.setState({ searchText: text })
    }
    handleSearch = async (text) => {
        alert('Search')
    }
    render() {
        const { searchText } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <BorderlessButton
                        style={styles.leftView}
                        activeOpacity={0.1}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon name={'arrow-back'} size={20} color={colors.black} />
                    </BorderlessButton>
                    <TextInput
                        ref="searchInput"
                        autoFocus={true}
                        value={searchText}
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder={'Search for products'}
                        style={styles.serchInputStyle}
                        underlineColorAndroid={"transparent"}
                        selectionColor={colors.black}
                        onChangeText={text => this.handleTextChange(text)}
                        returnKeyType={'search'}
                        onSubmitEditing={() => this.handleSearch()}
                    />
                    {searchText !== '' && (
                        <BorderlessButton style={styles.leftView} onPress={() => this.setState({ searchText: '' })}>
                            <Icon name={'close'} size={20} color={colors.black} />
                        </BorderlessButton>
                    )}
                </View>
            </View>
        )
    }
}
export default Search
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.plaeGray
    },
    headerView: {
        flexDirection: 'row',
        zIndex: 1,
        width: '100%',
        height: 50,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.gray
    },
    serchInputStyle: {
        alignSelf: 'center',
        width: windowWidth - 100,
        height: 50,
        backgroundColor: 'transparent',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.black
    },
    leftView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})