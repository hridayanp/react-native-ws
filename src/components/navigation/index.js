import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountNavigator from './account.navigator';
import { AppNavigator } from './app.navigator';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/login/loginSlice';

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
