import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../../features/account/screens/Signin.screen';
import ForgotPasswordScreen from '../../features/account/screens/ForgotPassword.screen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={SigninScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
