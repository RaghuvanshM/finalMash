import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/module/store'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import RouterComponent from './src/router';
import {StatusBar, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import SplashScreenComponent from './src/screens/SplashScreen';
enableScreens();
const persistor = persistStore(Store);

const App = () => {
  useEffect(() => {
    return () => {
      persistor.flush();
    };
  }, []);

  return (
    <View style={{flex:1}}>
        <Provider store={Store}>
          <PersistGate
            persistor={persistor}
            children={bootstrapped =>
              {
                console.log(bootstrapped)
              if (bootstrapped) {
                return <RouterComponent />;
              } else {
                return <SplashScreenComponent />;
              }
            }}
          />
        </Provider>
    </View>
  );
};
export default App;
