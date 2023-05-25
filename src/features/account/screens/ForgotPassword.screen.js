import React, { useState } from 'react';
import BgImage from '../../../../assets/images/signin/bg-image.png';
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';

import {
  AccountContainerCard,
  AccountTitle,
  AccountBgImage,
  AccountButtonStyle,
  AccountButtonWrapperView,
  AccountContainer,
  AccountHeaderView,
  AccountSubtitle,
  AccountTextInput,
  AccountTextInputView,
} from '../components/account.styles';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleForgotPassword = () => {
    console.log('email', email);
    setSuccessMsg(true);
  };

  return (
    <AccountContainer>
      <AccountBgImage source={BgImage} resizeMode="cover">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <AccountContainerCard>
            <AccountHeaderView>
              <AccountTitle>Password Assistance</AccountTitle>
              <AccountSubtitle>
                Enter your email associated with you account and we'll send an
                email with instructions to reset your password.
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
            </AccountTextInputView>

            {successMsg && (
              <View>
                <Text>Sent</Text>
              </View>
            )}

            <AccountButtonWrapperView>
              <AccountButtonStyle
                icon="mail"
                mode="contained"
                buttonColor="#efa452"
                onPress={handleForgotPassword}
              >
                Proceed
              </AccountButtonStyle>
            </AccountButtonWrapperView>
          </AccountContainerCard>
        </TouchableWithoutFeedback>
      </AccountBgImage>
    </AccountContainer>
  );
};

export default ForgotPasswordScreen;
