import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../constants/colors';
import Products from '../../containers/Products';
import TopNavBar from '../../containers/TopNavBar';
import Button from '../../containers/Button';

class MyCart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <TopNavBar
                    title={`My Cart`}
                    onBackPress={() => this.props.navigation.navigate('Home')}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewStyle}

                >
                    <Products from={'cart'} />
                    <View style={styles.summaryWrapper}>
                        <Text style={styles.titleText}>price detail</Text>
                        <View style={styles.summaryInnerWrapper}>
                            <View style={styles.row}>
                                <Text style={styles.textStyle}>{`Price (2 items)`}</Text>
                                <Text style={styles.priceText}>&#36;{900}</Text>

                            </View>
                            <View style={styles.row}>
                                <Text style={styles.textStyle}>Delivery</Text>
                                <Text style={[styles.priceText, { color: 'red' }]}>Free</Text>
                            </View>
                            <View style={[styles.row, styles.border]}>
                                <Text style={styles.payAmountTitleText}>Payable Amount</Text>
                                <Text style={styles.payAmountText}>&#36;{900}</Text>
                            </View>
                        </View>

                        <View style={styles.discountWrapper}>
                            <Text style={styles.discountText}>You will save &#36;{70} on this order</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.checkoutWrapper}>
                    <View><Text style={styles.totalPriceText}>&#36;{900}</Text></View>
                    <Button
                        title={'checkout'}
                        style={styles.buttonStyle}
                        onPress={()=>{this.props.navigation.navigate('CheckOut')}}
                      
                      
                    />
                </View>
            </View>
        )
    }
}
export default MyCart;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.paleGray
    },
    scrollViewStyle: {
        flexGrow: 1,
        marginTop: 10
    },
    titleText: {
        fontSize: 15,
        color: colors.darkGray,
        fontFamily: 'Poppins-SemiBold',
        padding: 15,
        textTransform: 'uppercase'
    },
    summaryWrapper: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        marginBottom: 10
    },
    summaryInnerWrapper: {
        borderTopWidth: 1,
        borderTopColor: colors.paleGray,
        paddingHorizontal: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    textStyle: {
        fontSize: 15,
        color: colors.darkBlack,
        fontFamily: 'Poppins-Regular'
    },
    priceText: {
        fontSize: 15,
        color: colors.darkBlack
    },
    payAmountTitleText: {
        fontSize: 15,
        color: colors.darkBlack,
        fontFamily: 'Poppins-SemiBold',
        paddingVertical: 4
    },
    payAmountText: {
        fontSize: 15,
        color: colors.darkBlack,
        paddingVertical: 4,
        fontWeight: 'bold'
    },
    border: {
        borderTopWidth: 1,
        borderTopColor: colors.paleGray
    },
    discountWrapper: {
        borderTopWidth: 1,
        borderTopColor: colors.paleGray,
        padding: 15
    },
    checkoutWrapper: {
        height: 70,
        width: '100%',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 0,
    },
    discountText: {
        fontSize: 16,
        color: '#e44912'
    },
    totalPriceText: {
        fontSize: 24,
        color: colors.darkBlack,
        fontWeight: 'bold'
    },
    buttonStyle: {
		width: 150
	},
})