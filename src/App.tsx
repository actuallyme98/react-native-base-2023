import React from 'react';

import {Provider} from 'react-redux';

import AppNavigator from './navigators/AppNavigator';

import './i18n';
import {store} from '@redux/store';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
