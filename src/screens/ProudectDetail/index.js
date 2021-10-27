import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {SliderBox} from 'react-native-image-slider-box';
import MyTabs from '../../router/MaterialTop';
import CartStrip from '../../Components/CartStrip';

const DATA = [
  {
    id: '1',

    userImg: require('../../assets/images/tea.jpg'),
    price: ' ₹350',
    Mrp: ' ₹450',
    detail: 'Grofers',
    quant: '50g',
    txt: 'Messges and calls are end-to-end encrypted',
  },
  {
    id: '2',

    userImg: require('../../assets/images/tea.jpg'),
    price: ' ₹350',
    Mrp: ' ₹450',
    detail: 'Grofers',
    quant: '50g',
    txt: 'Messges and calls are end-to-end encrypted',
  },
  {
    id: '3',

    userImg: require('../../assets/images/tea.jpg'),
    price: ' ₹350',
    Mrp: ' ₹450',
    detail: 'Grofers',
    quant: '50g',
    txt: 'Messges and calls are end-to-end encrypted',
  },
  {
    id: '4',

    userImg: require('../../assets/images/tea.jpg'),
    price: ' ₹350',
    Mrp: ' ₹450',
    detail: 'Grofers',
    quant: '50g',
    txt: 'Messges and calls are end-to-end encrypted',
  },
  {
    id: '5',

    userImg: require('../../assets/images/tea.jpg'),
    price: ' ₹350',
    Mrp: ' ₹450',
    detail: 'Grofers',
    quant: '50g',
    txt: 'Messges and calls are end-to-end encrypted',
  },
  {
    id: '6',

    userImg: require('../../assets/images/tea.jpg'),
    price: ' ₹350',
    Mrp: ' ₹450',
    detail: 'Grofers',
    quant: '50g',
    txt: 'Messges and calls are end-to-end encrypted',
  },
];
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/tea.jpg'),
        require('../../assets/images/tea2.jpg'),
        require('../../assets/images/tea3.jpg'),
        require('../../assets/images/tea4.jpg'),
        require('../../assets/images/tea5.jpg'), // Local image
      ],
    };
  }
  render() {
    return (
      <>
        <View style={{flex: 2}}>
          <StatusBar barStyle="dark-content" backgroundColor="#f5f7fa" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'relative',
              marginTop: 8,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <AntDesign name="arrowleft" size={26} />
            </TouchableOpacity>
            <AntDesign
              name="search1"
              size={23}
              style={{position: 'absolute', right: 15}}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 30}}
            decelerationRate="normal">
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#d7d7db',
                marginTop: 15,
                height: 300,
                position: 'relative',
              }}>
              <Ionicons
                style={{
                  fontWeight: 'bold',
                  position: 'absolute',
                  right: 30,
                  top: 20,
                }}
                name="share-social-outline"
                color="#ed7642"
                size={26}
              />
              <SliderBox
                images={this.state.images}
                dotColor="#c25d1f"
                autoplay={true}
                sliderBoxHeight={250}
                resizeMode="center"
                inactiveDotColor="#565c58"
                paginationBoxVerticalPadding={-10}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 0.8,
                height: 270,
                borderBottomColor: '#d7d7db',
              }}>
              <View
                style={{
                  backgroundColor: '#4284ed',
                  height: 'auto',
                  width: 70,
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: 'white',
                    paddingHorizontal: 3,
                    paddingVertical: 5,
                  }}>
                  {' '}
                  17% OFF
                </Text>
              </View>
              <Text
                style={{
                  color: '#656769',
                  marginLeft: 15,
                  marginTop: 8,
                  fontSize: 17,
                }}>
                Tata Premium Tea (Pouch)
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  position: 'relative',
                  marginTop: 8,
                }}>
                <Text
                  style={{
                    color: '#656769',
                    marginLeft: 15,
                    marginTop: 5,
                    fontSize: 16,
                  }}>
                  MRP:
                </Text>
                <Text
                  style={{
                    color: '#656769',
                    marginLeft: 15,
                    marginTop: 5,
                    fontSize: 16,
                    position: 'absolute',
                    left: 40,
                    textDecorationLine: 'line-through',
                  }}>
                  ₹490.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  position: 'relative',
                  marginTop: 8,
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 15,
                    marginTop: 5,
                    fontSize: 18,
                  }}>
                  SP:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 10,
                    marginTop: 5,
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  ₹402.00
                </Text>
              </View>

              <View style={{flexDirection: 'row', position: 'relative'}}>
                <Text
                  style={{
                    color: '#656769',
                    marginLeft: 15,
                    marginTop: 3,
                    fontSize: 17,
                  }}>
                  (Inclusive all taxes)
                </Text>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#E96125',
                      width: 60,
                      height: 28,
                      borderTopLeftRadius: 3,
                      borderBottomLeftRadius: 3,
                    }}>
                    <Text
                      style={{
                        color: '#ffff',
                        fontWeight: '900',
                        textAlign: 'center',
                        paddingTop: 2,
                        fontSize: 16,
                      }}>
                      ADD
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#BF501F',
                      width: 30,
                      height: 28,
                      borderTopRightRadius: 3,
                      borderBottomRightRadius: 3,
                    }}>
                    <Ionicons
                      style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: 'white',
                        paddingTop: 6,
                        fontWeight: '900',
                      }}
                      name="add"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 'auto',
                  backgroundColor: 'rgb(146, 222, 231)',
                  width: 'auto',
                  marginTop: 25,
                  borderWidth: 0.6,
                  borderColor: '#48e3f7',
                  marginHorizontal: 15,
                  borderRadius: 4,
                  position: 'relative',
                }}>
                <View
                  style={{flexDirection: 'row', padding: 8, marginVertical: 4}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../assets/images/wallet.png')}
                    />
                    <View
                      style={{
                        height: '100%',
                        width: 1,
                        backgroundColor: 'black',
                        paddingVertical: -10,
                        marginLeft: 10,
                      }}></View>
                  </View>

                  <Text
                    style={{
                      color: '#159bb0',
                      marginLeft: 20,
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    ₹390.00
                  </Text>
                  <Text
                    style={{
                      color: '#656769',
                      fontSize: 16,
                      textDecorationLine: 'line-through',
                      marginLeft: 5,
                    }}>
                    ₹402.00
                  </Text>
                  <Fontisto
                    style={{position: 'absolute', right: 15, top: 10}}
                    size={13}
                    name="locked"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 10,
                borderBottomWidth: 10,
                height: 100,
                width: '100%',
                borderBottomColor: 'rgb(238, 238, 238)',
              }}>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 15}}>Unit</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'rgb(233, 97, 37)',
                    height: 'auto',
                    width: 50,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      padding: 10,
                      color: 'rgb(233, 97, 37)',
                      fontSize: 14,
                    }}>
                    1 kg
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1,

                height: 300,
              }}>
              <MyTabs />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 20,
              }}>
              <Text
                style={{fontWeight: 'bold', flexWrap: 'wrap', fontSize: 22}}>
                Frequently Bought Together
              </Text>
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: '900',
                  fontSize: 17,
                  color: '#ED7F4E',
                }}>
                See all
              </Text>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    height: 230,
                    width: 100,
                    marginHorizontal: 5,
                    borderRadius: 8,
                    marginTop: 20,
                    elevation: -1,
                  }}>
                  <Image
                    style={{
                      height: 80,
                      width: 60,
                      alignSelf: 'center',
                      marginTop: 15,
                    }}
                    source={item.userImg}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                      elevation: 1,
                    }}>
                    <Text
                      style={{marginTop: 15, fontWeight: 'bold', fontSize: 16}}>
                      {item.price}
                    </Text>
                    <Text
                      style={{
                        marginTop: 15,
                        fontSize: 13,

                        textDecorationLine: 'line-through',
                        marginLeft: 8,
                        color: 'grey',
                      }}>
                      {item.Mrp}
                    </Text>
                  </View>

                  <View style={{marginTop: 6, marginLeft: 10}}>
                    <Text style={{fontSize: 12}}>Maggi Masala</Text>
                    <Text style={{fontSize: 12}}>Noodles -pasta</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#E96125',
                        width: 50,
                        height: 28,
                        borderTopLeftRadius: 3,
                        borderBottomLeftRadius: 3,
                      }}>
                      <Text
                        style={{
                          color: '#ffff',
                          fontWeight: '900',
                          textAlign: 'center',
                          paddingTop: 2,
                          fontSize: 16,
                        }}>
                        ADD
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#BF501F',
                        width: 30,
                        height: 28,
                        borderTopRightRadius: 3,
                        borderBottomRightRadius: 3,
                      }}>
                      <Ionicons
                        style={{
                          textAlign: 'center',
                          fontSize: 15,
                          color: 'white',
                          paddingTop: 6,
                          fontWeight: '900',
                        }}
                        name="add"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 20,
              }}>
              <Text
                style={{fontWeight: 'bold', flexWrap: 'wrap', fontSize: 22}}>
                Most Popular
              </Text>
              <Text
                style={{
                  marginRight: 20,
                  fontWeight: '900',
                  fontSize: 17,
                  color: '#ED7F4E',
                }}>
                See all
              </Text>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    height: 230,
                    width: 100,
                    marginHorizontal: 5,
                    borderRadius: 8,
                    marginTop: 20,
                  }}>
                  <Image
                    style={{
                      height: 80,
                      width: 60,
                      alignSelf: 'center',
                      marginTop: 15,
                    }}
                    source={item.userImg}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                      elevation: 1,
                    }}>
                    <Text
                      style={{marginTop: 15, fontWeight: 'bold', fontSize: 16}}>
                      {item.price}
                    </Text>
                    <Text
                      style={{
                        marginTop: 15,
                        fontSize: 13,

                        textDecorationLine: 'line-through',
                        marginLeft: 8,
                        color: 'grey',
                      }}>
                      {item.Mrp}
                    </Text>
                  </View>

                  <View style={{marginTop: 6, marginLeft: 10}}>
                    <Text style={{fontSize: 12}}>Maggi Masala</Text>
                    <Text style={{fontSize: 12}}>Noodles -pasta</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#E96125',
                        width: 50,
                        height: 28,
                        borderTopLeftRadius: 3,
                        borderBottomLeftRadius: 3,
                      }}>
                      <Text
                        style={{
                          color: '#ffff',
                          fontWeight: '900',
                          textAlign: 'center',
                          paddingTop: 2,
                          fontSize: 16,
                        }}>
                        ADD
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#BF501F',
                        width: 30,
                        height: 28,
                        borderTopRightRadius: 3,
                        borderBottomRightRadius: 3,
                      }}>
                      <Ionicons
                        style={{
                          textAlign: 'center',
                          fontSize: 15,
                          color: 'white',
                          paddingTop: 6,
                          fontWeight: '900',
                        }}
                        name="add"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </ScrollView>
        </View>
        <CartStrip />
      </>
    );
  }
}
