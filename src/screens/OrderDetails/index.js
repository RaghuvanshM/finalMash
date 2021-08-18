import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { colors } from '../../constants/colors';
import { windowWidth } from '../../utils/deviceInfo';
import TopNavBar from '../../containers/TopNavBar/index';
import { images } from '../../assets';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderProduct = () => {

        return (
            <View style={[styles.productWrapper]}>
                <View style={styles.imageWrapper}>
                    <Image source={images.dummy} resizeMode={'contain'} style={styles.productImage} />
                </View>
                <View style={styles.rightWrapper}>
                    <Text style={styles.nameText} numberOfLines={1} ellipsizeMode={'tail'}>{'Product Name'}</Text>
                    <Text style={styles.descriptionText} numberOfLines={2} ellipsizeMode={'tail'}>{'visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}</Text>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.priceText}>&#36;{'1000'}</Text>
                        <Text style={styles.quantityText}>Quantity: {'2'}</Text>

                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TopNavBar navigation={this.props.navigation} title={'Order Details'}
                    onBackPress={false}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    style={styles.scrollViewStyle}
                >
                    {this.renderProduct()}
                    {this.renderProduct()}
                    <View style={styles.summaryWrapper}>
                        <Text style={styles.titleText}>price detail</Text>
                        <View style={styles.summaryInnerWrapper}>
                            <View style={styles.row}>
                                <Text style={styles.newpriceText}>{`Price (2 items)`}</Text>
                                <Text style={styles.newpriceText}>&#36;{700}</Text>

                            </View>
                            <View style={styles.row}>
                                <Text style={styles.newpriceText}>Delivery Fee</Text>
                                <Text style={styles.newpriceText}>&#36;{100}</Text>

                            </View>
                            <View style={[styles.row, styles.border]}>
                                <Text style={styles.payAmountText}>Total Amount</Text>
                                <Text style={styles.payAmountText}>&#36;{800}</Text>

                            </View>
                        </View>
                        <View style={styles.discountWrapper}>
                            <Text style={styles.discountText}>You saved &#36;{60} on this order</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default OrderDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.paleGray
    },
    productWrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        height: 120,
        backgroundColor: colors.white,
        marginTop: 10
    },
    imageWrapper: {
        height: 100,
        width: 100,
        backgroundColor: colors.paleGray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productImage: {
        height: 100,
        width: 100
    },
    rightWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10,
        width: windowWidth - 150,
    },
    nameText: {
        fontSize: 14,
        color: colors.black,
        fontFamily: 'Poppins-Regular',
        textTransform: 'capitalize',
        lineHeight: 18
    },
    descriptionText: {
        fontSize: 13,
        color: colors.darkGray,
        fontFamily: 'Poppins-Regular'
    },
    infoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceText: {
        fontSize: 16,
        color: colors.darkBlack,
        fontWeight: 'bold'
    },
    quantityText: {
        fontSize: 14,
        color: colors.darkBlack,
        fontFamily: 'Poppins-Regular'
    },
    summaryWrapper: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 10
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
    newpriceText: {
        fontSize: 15,
        color: colors.darkBlack
    },
    border: {
        borderTopWidth: 1,
        borderTopColor: colors.paleGray
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
	}
})