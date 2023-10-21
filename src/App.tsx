import React from 'react';

import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

import AppNavigator from './navigators/AppNavigator';

import './i18n';
import {store} from '@redux/store';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Host>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </Host>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
