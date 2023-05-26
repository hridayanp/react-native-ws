import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AccountNavigator from './account.navigator';
import { AppNavigator } from './app.navigator';

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
