import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StartScreen from '@screens/start';
import AuthedNavigator from './AuthedNavigator';
import UnAuthedNavigator from './UnAuthedNavigator';

import {useAppDispatch} from '@redux/store';
import {
  initializeAppAsync,
  useSelectAppStatus,
  useSelectAppAuthentication,
} from '@redux/slices/app.slice';

type Props = {};

const AppNavigator: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const appStatus = useSelectAppStatus();
  const isAuthentication = useSelectAppAuthentication();

  useEffect(() => {
    dispatch(initializeAppAsync());
  }, [dispatch]);

  if (appStatus === 'loading') {
    return <StartScreen />;
  }

  return (
    <NavigationContainer>
      {isAuthentication ? <AuthedNavigator /> : <UnAuthedNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
