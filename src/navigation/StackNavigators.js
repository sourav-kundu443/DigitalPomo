import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/homeScreen';
import NewProject from '../screens/newProjectScreen';
import HomeDashboard from '../screens/homeDashboard';
import ProjectInformation from '../screens/projectInformation';
import ProjectMilestones from '../screens/timeline';
import Contacts from '../screens/contacts';
import Models from '../screens/dModels';
import PhotosScreen from '../screens/homeScreens/PhotosScreen';
import DocumentScreen from '../screens/homeScreens/DocumentsScreen';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewProject"
        component={NewProject}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectInformation"
        component={ProjectInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Timeline"
        component={ProjectMilestones}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Models"
        component={Models}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PhotosScreen"
        component={PhotosScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BillingStackScreen = () => {
  return (
    <View>
      <Text>Billing</Text>
    </View>
  );
};
const NotificationStackScreen = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};
const ProfileStackScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};



export {
  HomeStackScreen,
  BillingStackScreen,
  NotificationStackScreen,
  ProfileStackScreen,
};
