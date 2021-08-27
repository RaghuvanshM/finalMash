import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import TopNavBar from '../../containers/TopNavBar/index';
import { RectButton } from 'react-native-gesture-handler';

class Order extends React.Component {
    constructor(props) {
        super(props)
    }
    renderOrder = () => {
        return (
            <RectButton
                style={[styles.orderWrapper]}
                activeOpacity={0.1}
                onPress={() => this.props.navigation.navigate('OrderDetail')}
            >
                <View style={styles.row}>
                    <Text style={styles.numberText}>{`Order No  #01`}</Text>
                    <Text style={styles.priceText}>&#36;{'200'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.dateText}>{'18 Aug 2021'}</Text>
                    <Text style={styles.discountText}>You Saved: &#36;{'20'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.numberText}>Items:2</Text>
                    <View style={[styles.statusWrapper]}>
                        <Text style={styles.statusText}>{'Cancel'}</Text>

                    </View>
                </View>

            </RectButton>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TopNavBar navigation={this.props.navigation} title={'Order Details'}
                    onBackPress={false}
                />
                {this.renderOrder()}
                {this.renderOrder()}
                {this.renderOrder()}
                {this.renderOrder()}

            </View>
        )
    }
}
export default Order;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.paleGray
    },
    orderWrapper: {
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: colors.white,
        height: 95,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, numberText: {
        fontSize: 14,
        color: colors.darkBlack,
        fontFamily: 'Poppins-SemiBold',
        letterSpacing: 0.25,
        lineHeight: 18
    },
    priceText: {
        fontSize: 16,
        color: '#252525',
        lineHeight: 18,
        fontWeight: 'bold'
    },
    dateText: {
        fontSize: 12,
        color: colors.darkGray,
        fontFamily: 'Poppins-Regular',
        letterSpacing: 0.25
    },
    discountText: {
        fontSize: 13,
        color: colors.red
    },
    statusWrapper: {
        height: 25,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        backgroundColor: 'red'
    },
    statusText: {
        fontSize: 13,
        color: colors.white,
        fontFamily: 'Poppins-Regular'
    },

})