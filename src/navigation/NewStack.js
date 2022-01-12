import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/splashScreen';
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
