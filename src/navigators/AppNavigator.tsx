import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthedNavigator from './AuthedNavigator';

type Props = {};

const AppNavigator: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <AuthedNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
