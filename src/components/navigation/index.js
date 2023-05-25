import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountNavigator from './account.navigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
