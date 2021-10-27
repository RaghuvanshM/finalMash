import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from 'react-redux';
import AuthStackComponent from './src/router/AuthRoutes';
import store from './src/module/store';
import {getData, setData} from './src/utils/storage';

import OfflineNotice from './src/containers/OfflineNotice';
import OfflineScreen from './src/containers/OfflineScreen';
import Spinner from './src/containers/Spinner';
import StatusBar from './src/containers/StatusBar';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Router from './src/router';

IconFontAwesome.loadFont();
IconMaterialCommunity.loadFont();
IconMaterial.loadFont();
IconIonicons.loadFont();
AntIcon.loadFont();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      loading: true,
      isuser: false,
    };
    this.setTempUser();
  }

  async UNSAFE_componentWillMount() {
    await NetInfo.fetch().then(state => {
      this.setState({isConnected: state.isConnected, loading: false});
    });
    SplashScreen.hide();
  }

  setTempUser = async () => {
    const token = JSON.parse(await getData('tempUserId'));
    if (token) {
      this.setState({isuser: true});
    }
  };

  onConnectionChanged = isConnected => {
    this.setState({isConnected});
  };

  renderApp = () => {
    const {isConnected, loading, isuser} = this.state;
    if (loading) return <Spinner />;
    else if (!isConnected) return <OfflineScreen />;
    else return <Router />;
  };
  componentDidUpdate() {}
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container} forceInset={{top: 'never'}}>
          <StatusBar />
          <OfflineNotice
            onConnectionChanged={isConnected =>
              this.onConnectionChanged(isConnected)
            }
          />
          {this.renderApp()}
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
