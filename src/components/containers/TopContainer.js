import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopContainer = () => {
  return <View style={styles.topcontainer}></View>;
};

const styles = StyleSheet.create({
  topcontainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
export default TopContainer;
