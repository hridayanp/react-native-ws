import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import BgImage from '../../../../assets/images/signin/bg-image.png';
import IndraLogo from '../../../../assets/images/indra.png';
import MisteoLogo from '../../../../assets/images/logo-misteo.svg';

import { Checkbox, Text, TextInput } from 'react-native-paper';

import {
  AccountContainerCard,
  AccountTitle,
  AccountBgImage,
  AccountButtonStyle,
  AccountButtonWrapperView,
  AccountContainer,
  AccountForgotPasswordRowView,
  AccountForgotPasswordText,
  AccountHeaderView,
  AccountKeepLoggedInText,
  AccountKeppLoggedInView,
  AccountSubtitle,
  AccountTextInput,
  AccountTextInputView,
  LogoView,
} from '../components/account.styles';
import { getStationList, logIn } from '../../../api/ApiService';
import { useMutation, useQuery } from '@tanstack/react-query';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../../redux/login/loginSlice';
import {
  setAvailableWeatherStations,
  setWeatherStation,
} from '../../../redux/dashboard/dashboardSlice';

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [userIdState, setUserIdState] = useState(0);
  const [isSignInSuccess, setIsSignInSuccess] = useState(false);

  const getUserID = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id');
      return user_id;
    } catch (error) {
      console.log('Error retrieving user_id from AsyncStorage:', error);
      return null;
    }
  };

  const { mutate: signIn } = useMutation((userData) => logIn(userData), {
    onMutate: () => {
      console.log('onMutate');
      setIsLoading(true);
    },
    onSuccess: async (data) => {
      setIsLoading(false);
      if (data.status === 200) {
        if (data.data.success === false) {
          ToastAndroid.show(data.data.message, ToastAndroid.LONG);
          return;
        }

        await AsyncStorage.setItem('access_token', data.data.access);
        await AsyncStorage.setItem('refresh_token', data.data.refresh);
        await AsyncStorage.setItem('user_id', String(data.data.user_id));

        // dispatch(
        //   setIsAuthenticated({
        //     isAuthenticated: true,
        //   })
        // );

        // const role_id = data.data.role;
        // const role = roles(role_id);
        // localStorage.setItem('role', role);

        setIsSignInSuccess(true);
        setUserIdState(Number(data.data.user_id));
      }
    },
    onError: (error) => {
      console.log('error :>> ', error);
    },
  });

  // Create the stationList query outside the component
  const stationListQuery = useQuery(
    ['stationList'],
    () => getStationList({ user_id: userIdState }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      onSuccess: (data) => {
        console.log('data in stationList', data);
        const {
          status,
          data: { station_list },
        } = data;
        const id = station_list?.[0]?.weather_station_id;
        const name = station_list?.[0]?.weather_station;
        status === 200 && data.data.success === true
          ? dispatch(setAvailableWeatherStations(station_list)) &&
            dispatch(setWeatherStation({ id, name })) &&
            dispatch(
              setIsAuthenticated({
                isAuthenticated: true,
              })
            )
          : null;

        status === 200 &&
        data.data.success === false &&
        data.data.data === 'User has no station data'
          ? toast.error(
              'User has no station data. Please contact Administrator'
            ) && localStorage.clear()
          : null;
      },
    }
  );

  const handleSignin = () => {
    console.log('email, password, keepLoggedIn', email, password, keepLoggedIn);
    signIn({ username: email, password: password });
  };

  useEffect(() => {
    const fetchStationList = async () => {
      const userId = await getUserID();
      console.log('userId', userId);
      console.log('typeof userId', typeof userId);

      if (userId) {
        setUserIdState(Number(userId));
        stationListQuery.refetch();
      } else {
        console.log('Unable to retrieve user_id from AsyncStorage');
      }
    };

    if (isSignInSuccess) {
      fetchStationList();
    }
  }, [isSignInSuccess]);

  return (
    <AccountContainer>
      <AccountBgImage source={BgImage} resizeMode="cover">
        <LogoView>
          <Image style={styles.tinyLogo} source={IndraLogo} />
        </LogoView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <AccountContainerCard>
            <AccountHeaderView>
              <AccountTitle>Sign In</AccountTitle>
              <AccountSubtitle>
                Enter your email and password to sign in.
              </AccountSubtitle>
            </AccountHeaderView>

            <AccountTextInputView>
              <AccountTextInput
                label="Email"
                mode="outlined"
                outlineColor="#e0e5f2"
                activeOutlineColor="#efa452"
                textContentType="emailAddress"
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
              <AccountTextInput
                label="Password"
                mode="outlined"
                outlineColor="#e0e5f2"
                activeOutlineColor="#efa452"
                textContentType="password"
                secureTextEntry={hidePassword ? true : false}
                autoCapitalize="none"
                value={password}
                onChangeText={(e) => setPassword(e)}
                right={
                  <TextInput.Icon
                    icon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                }
              />
            </AccountTextInputView>

            <AccountForgotPasswordRowView>
              <AccountKeppLoggedInView>
                <Checkbox.Android
                  status={keepLoggedIn ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setKeepLoggedIn(!keepLoggedIn);
                  }}
                />
                <AccountKeepLoggedInText>
                  Keep me logged in
                </AccountKeepLoggedInText>
              </AccountKeppLoggedInView>

              <AccountForgotPasswordText
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                Forgot Password?
              </AccountForgotPasswordText>
            </AccountForgotPasswordRowView>

            <AccountButtonWrapperView>
              <AccountButtonStyle
                icon="mail"
                mode="contained"
                buttonColor="#efa452"
                onPress={handleSignin}
              >
                Sign In
              </AccountButtonStyle>
            </AccountButtonWrapperView>
          </AccountContainerCard>
        </TouchableWithoutFeedback>
        <LogoView>
          <MisteoLogo width={150} height={50} />
        </LogoView>
      </AccountBgImage>
    </AccountContainer>
  );
};

export default Signin;
