import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../screens/signupScreen';
import LoginScreen from '../screens/loginScreen';

import VerificationScreen from '../screens/verificationScreen';

import OTPScreen from '../screens/otpScreen';
import NewPassword from '../screens/passwordScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
