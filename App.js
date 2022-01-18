import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import NewStack from './src/navigation/NewStack';

const App = () => {
  return (
    <NavigationContainer>
      <NewStack />
    </NavigationContainer>
  );
};

export default App;
