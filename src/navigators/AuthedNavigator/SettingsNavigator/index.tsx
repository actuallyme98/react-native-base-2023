import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerToggleButton} from '@react-navigation/drawer';
import {HeaderBackButtonProps, HeaderTitle} from '@react-navigation/elements';
import {View} from 'react-native';
import SettingScreen from '@screens/authed/Settings';

import {NIGHT_RIDER_COLOR, SLATE_GREY_COLOR} from '@constants/colors';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
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
      initialRouteName={'SettingList'}
      screenOptions={{
        headerBackTitleVisible: false,
        headerLeft,
        headerTintColor: SLATE_GREY_COLOR,
        headerTitle,
      }}>
      <Stack.Screen<keyof SettingStackParamList>
        name={'SettingList'}
        component={SettingScreen}
        options={{headerTitle: 'Settings'}}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
