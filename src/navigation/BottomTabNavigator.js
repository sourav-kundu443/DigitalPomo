import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import {
  HomeStackScreen,
  BillingStackScreen,
  NotificationStackScreen,
  ProfileStackScreen,
} from './StackNavigators';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Project':
      iconName = 'grid';
      break;
    case 'Billing':
      iconName = 'printer';
      break;
    case 'Notification':
      iconName = 'bell';
      break;
    case 'Profile':
      iconName = 'user';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={25} />;
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {fontSize: 14, fontWeight: '600'},
      })}
      
      >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Billing"
        component={BillingStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
