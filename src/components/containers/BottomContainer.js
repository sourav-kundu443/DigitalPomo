import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BottomContainer = () => {
  return (
    <View style={styles.bottomcontainer}>
      <Text>kkkkk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomcontainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    backgroundColor: 'red',
  },
});
export default BottomContainer;
