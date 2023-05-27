import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  StackActions,
  TabActions,
} from '@react-navigation/native';
import Signin from '../../account/screens/Signin.screen';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../../redux/login/loginSlice';

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logOutHandler = async () => {
    // try {
    //   // Clear all AsyncStorage values
    //   // await AsyncStorage.clear();
    //   dispatch(
    //     setIsAuthenticated({
    //       isAuthenticated: false,
    //     })
    //   );
    //   // Navigate to AccountNavigator
    //   navigation.navigate('Main');
    // } catch (error) {
    //   console.log('Error occurred during logout:', error);
    // }
  };

  return (
    <View>
      <Text onPress={logOutHandler}>Logout</Text>
    </View>
  );
};

export default SettingsScreen;
