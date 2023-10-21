import React, {useCallback} from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {Image} from 'react-native';
import {makeStyles} from '@utils/style.util';

import DrawerContent from './Drawer';
import HomeNavigator from './HomeNavigator';
import SettingNavigator from './SettingsNavigator';

import {MENU_WALLET_ICON, MENU_ACCOUNT_ICON} from '@assets/index';

const Drawer = createDrawerNavigator();

const AuthedNavigator = () => {
  const styles = useStyles();

  const drawerContent = useCallback(
    (props: DrawerContentComponentProps) => <DrawerContent {...props} />,
    [],
  );
  const HomeDrawerIcon = useCallback(
    () => <Image style={styles.menuIcon} source={MENU_WALLET_ICON} />,
    [styles.menuIcon],
  );
  const SettingDrawerIcon = useCallback(
    () => <Image style={styles.menuIcon} source={MENU_ACCOUNT_ICON} />,
    [styles.menuIcon],
  );

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={drawerContent}
      screenOptions={{
        drawerItemStyle: {paddingVertical: 8},
        drawerLabelStyle: {fontSize: 18, flex: 1},
      }}>
      <Drawer.Screen<keyof AuthedDrawerParamList>
        name={'Home'}
        component={HomeNavigator}
        options={{
          headerShown: false,
          drawerIcon: HomeDrawerIcon,
        }}
      />
      <Drawer.Screen<keyof AuthedDrawerParamList>
        name={'Settings'}
        component={SettingNavigator}
        options={{
          headerShown: false,
          drawerIcon: SettingDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
};

const useStyles = makeStyles({
  menuIcon: {
    width: 32,
    height: 32,
  },
});

export default AuthedNavigator;
