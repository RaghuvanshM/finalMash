import React from 'react';
import { colors } from '../../constants/colors';
import { windowWidth } from '../../utils/deviceInfo';
import {
    View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, RefreshControl
} from 'react-native';
import TopNavBar from '../../containers/TopNavBar/index';
import SlideShow from '../../containers/SlideShow';
import categrory from '../../constants/data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { images } from '../../assets';
import Products from '../../containers/Products';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        }
    }
    handleRefresh = async () => {
        this.setState({ refreshing: false })
    }
    renderSlider = () => {
        const sliderPhotos = [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image

        ]
        return (
            <View style={styles.slideShowWrapper}>
                <SlideShow autoplay={true} horizontal={true} activeDotColor={colors.white}>
                    {sliderPhotos.map((slider, index) => (
                        <View key={index}>
                            <Image
                                style={styles.slideImage}
                                source={{ uri: slider }}
                                resizeMode={'stretch'}
                            />
                        </View>
                    )
                    )}
                </SlideShow>
            </View>
        )
    }
    renderCategoryCircle = ({ item, index }) => {

        return (
            <TouchableOpacity
                key={index}
                activeOpacity={1}
            onPress={() => this.props.navigation.navigate('SearchProduct')}
            >
                <View style={styles.categoryWrapper}>
                    <View style={styles.categoryImageWrapper}>
                        {(item && item !== '') ?
                            <Image source={{ uri: item }} style={styles.categoryImage} resizeMode={'contain'} />
                            :
                            <Text style={styles.categoryText}>C</Text>
                        }
                    </View>
                    <Text
                        style={styles.categoryName}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                    >
                        {'Name'}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderCategory = () => {

        if (categrory.sliderPhotos) {
            return (
                <View style={styles.categoriesWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.leftIconWrapper} >
                        <Icon name={'chevron-left'} size={14} color={colors.black} />
                    </TouchableOpacity>
                    <FlatList
                        // ref={ref => this.categoryList = ref}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        removeClippedSubviews
                        style={styles.flatList}
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={categrory.sliderPhotos}
                        renderItem={item => this.renderCategoryCircle(item)}
                        bounces={false}
                        onContentSizeChange={(w, h) => this.setState({ scrollViewWidth: w })}
                        scrollEventThrottle={16}
                        onScroll={e => this.handleScroll(e)}
                    />
                    <TouchableOpacity activeOpacity={1} style={styles.rightIconWrapper}>
                        <Icon name={'chevron-right'} size={14} color={colors.black} />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.emptyCategoryWrapper}>
                    <Text style={styles.emptyCategoryText}>No category found</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TopNavBar from={'home'}/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.handleRefresh()}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >
                    {this.renderSlider()}
                    {this.renderCategory()}
                    <View style={styles.titleWrapper}>
                        <Image source={images.titleImageLeft} />
                        <Text style={styles.titleText}>Products</Text>
                        <Image source={images.titleImageRight} />

                    </View>
                    <Products  {...this.props}/>
                    <Products  {...this.props}/>
                    <Products  {...this.props}/>

                </ScrollView>
            </View>
        )
    }
}
export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.paleGray
    },
    scrollViewStyle: {
        flexGrow: 1
    },
    slideShowWrapper: {
        backgroundColor: colors.paleGray,
        height: 150,
        width: windowWidth - 20,
        marginTop: 10,
        marginHorizontal: 10
    },
    slideImage: {
        height: 150,
        width: windowWidth - 20
    },
    categoriesWrapper: {
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        marginTop: 10
    },
    leftIconWrapper: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        left: 0
    },
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
        paddingVertical: 10,
        marginHorizontal: 20
    },
    categoryWrapper: {
        width: 78,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 2
    },
    categoryImageWrapper: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors.paleGray,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    categoryText: {
        fontSize: 18,
        color: colors.lightGray,
        fontFamily: 'Poppins-SemiBold',
    },
    categoryName: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.black,
        textAlign: 'center',
        flexWrap: 'wrap',
        paddingTop: 10,
        textTransform: 'capitalize',
        lineHeight: 14
    },
    rightIconWrapper: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        right: 0
    },
    emptyCategoryWrapper: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        marginTop: 10
    },
    emptyCategoryText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: colors.gray,
        textAlign: 'center'
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
})