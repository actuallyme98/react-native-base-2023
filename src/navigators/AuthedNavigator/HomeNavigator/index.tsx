import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerToggleButton} from '@react-navigation/drawer';
import {HeaderBackButtonProps, HeaderTitle} from '@react-navigation/elements';
import {View} from 'react-native';
import DashboardScreen from '@screens/authed/Dashboard';
import SettingScreen from '@screens/authed/Setting';

import {NIGHT_RIDER_COLOR, SLATE_GREY_COLOR} from '@constants/colors';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const headerLeft = useCallback(
    (props: HeaderBackButtonProps) =>
      !props.canGoBack ? (
        <View style={{marginLeft: -15}}>
          <DrawerToggleButton />
        </View>
      ) : null,
    [],
  );
  const headerTitle = useCallback(
    (props: any) => <HeaderTitle {...props} tintColor={NIGHT_RIDER_COLOR} />,
    [],
  );

  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerBackTitleVisible: false,
        headerLeft,
        headerTintColor: SLATE_GREY_COLOR,
        headerTitle,
      }}>
      <Stack.Screen<keyof HomeStackParamList>
        name={'Dashboard'}
        component={DashboardScreen}
      />
      <Stack.Screen<keyof HomeStackParamList>
        name={'Setting'}
        component={SettingScreen}
        options={{headerTitle: 'Setting'}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
