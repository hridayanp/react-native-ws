import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForecastScreen from '../../features/forecast/screens/forecast.screen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Forecast" component={ForecastScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
