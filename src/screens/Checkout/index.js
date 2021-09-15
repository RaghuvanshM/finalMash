import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import TopNavBar from '../../containers/TopNavBar'
import Button from '../../containers/Button'
class Checkout extends React.Component {
    constructor(props) {
        super(props)

    }
    renderRadio = (title, paymentType, displayBorder) => (
        <TouchableOpacity style={[styles.radioButtonWrapper, styles.borderBottom]} activeOpacity={1} >
            <View style={styles.radioOuter}>
                <View style={styles.radioInner} />
            </View>
            <Text style={styles.radioText}>{title}</Text>
        </TouchableOpacity>
    )
    render() {
        const { props } = this
        return (
            <View style={styles.container}>
                <TopNavBar navigation={props.navigation} title={'Checkout'} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >
                    <View style={styles.addressWrapper}>
                        <Text style={styles.headText}>Deliver to</Text>
                        <Text style={styles.textStyle}>
                            {'New Ashok Nagar Delhi 110096'}
                        </Text>
                    </View>
                    <View style={styles.summaryWrapper}>
                        <Text style={styles.titleText}>price detail</Text>
                        <View style={styles.summaryInnerWrapper}>
                            <View style={styles.row}>
                                <Text style={styles.textStyle}>{`Price (2 Items)`}</Text>
                                <Text style={styles.priceText}>&#36;{100}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.textStyle}>Delivery  Fee</Text>
                                <Text style={[styles.priceText]}>Free</Text>

                            </View>
                            <View style={[styles.row, styles.border]}>
                                <Text style={styles.payAmountTitleText}>Payable Amount</Text>
                                <Text style={styles.payAmountText}>&#36;{100}</Text>

                            </View>
                        </View>
                        <View style={styles.discountWrapper}>
                            <Text style={styles.discountText}>You will save &#36;{20} on this order</Text>
                        </View>
                    </View>
                    <View style={styles.summaryWrapper}>
                        {this.renderRadio('Credit / Debit / ATM Card', 'stripe', true)}
                        {this.renderRadio('Paypal', 'paypal', true)}
                        {this.renderRadio('Cash On Delivery', 'cod')}
                    </View>
                </ScrollView>
                <View style={styles.checkoutWrapper}>
                    <Text style={styles.totalPriceText}>&#36;{100}</Text>
                    <Button
                        title={'continue'}
                        style={styles.buttonStyle}

                    />
                </View>
            </View>
        )
    }
}
export default Checkout;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.paleGray
    },
    scrollViewStyle: {
        flexGrow: 1,
        marginTop: 10
    },
    addressWrapper: {
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        backgroundColor: colors.white
    },
    headText: {
        fontSize: 15,
        color: colors.darkBlack,
        fontFamily: 'Poppins-SemiBold'
    },
    textStyle: {
        fontSize: 15,
        color: colors.darkBlack,
        fontFamily: 'Poppins-Regular'
    },
    summaryWrapper: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        marginBottom: 10
    },
    titleText: {
        fontSize: 15,
        color: colors.darkGray,
        fontFamily: 'Poppins-SemiBold',
        padding: 15,
        textTransform: 'uppercase'
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
    priceText: {

        fontSize: 15,
        color: colors.darkBlack,
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,

        color: 'red'
    },
    border: {
        borderTopWidth: 1,
        borderTopColor: colors.paleGray
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
    discountWrapper: {
        borderTopWidth: 1,
        borderTopColor: colors.paleGray,
        padding: 15
    },
    discountText: {
        fontSize: 16,
        color: '#e44912'
    },
    radioButtonWrapper: {
        flexDirection: 'row',
        padding: 15
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: colors.paleGray
    },
    radioOuter: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: colors.lime,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    radioText: {
        fontSize: 15,
        color: colors.darkBlack,
        fontFamily: 'Poppins-Regular',
        marginLeft: 10
    },
    checkoutWrapper: {
        height: 70,
        width: '100%',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 0
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