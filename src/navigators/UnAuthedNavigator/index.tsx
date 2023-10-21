import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/unauthed/Login';
import RegisterScreen from '@screens/unauthed/Register';

const Stack = createNativeStackNavigator();

const UnAuthedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen<keyof UnAuthedStackParamList>
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen<keyof UnAuthedStackParamList>
        name={'Register'}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UnAuthedNavigator;
