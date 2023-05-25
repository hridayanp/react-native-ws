import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSignin = () => {
    console.log('email, password, keepLoggedIn', email, password, keepLoggedIn);
  };

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
