import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomContainer from './BottomContainer';
import TopContainer from './TopContainer';

const CommonContainer = ({width, height, backgroundColor}) => {
  return (
    <View
      style={[
        styles.container,
        {width: width, height: height, backgroundColor: backgroundColor},
      ]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CommonContainer;
