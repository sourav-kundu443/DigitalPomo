import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CustomButton = ({
  onPress,
  title,
  color,
  paddingHorizontal,
  paddingVertical,
  marginVertical,
}) => {
  return (
    <View
      onPress={onPress}
      style={[
        styles.ButtonContainer,
        {
          backgroundColor: color,
          paddingHorizontal: paddingHorizontal,
          marginVertical: marginVertical,
          paddingVertical: paddingVertical
        },
      ]}>
      <Text style={styles.ButtonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...
  ButtonContainer: {
    elevation: 8,
    borderRadius: 5,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: 1
  },
});

export default CustomButton;
