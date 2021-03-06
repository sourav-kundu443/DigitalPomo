import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {SmallLogo} from '../assets/images';

const Header = ({
  navigation,
  screenName,
  color,
  text,
  middleText,
  fontSize,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        {text === 'Pomo Digital' ? (
          <Text style={[styles.text, {color: color}]}>{text}</Text>
        ) : (
          <Icon name="chevron-left" color={color} size={15} />
        )}
      </TouchableOpacity>
      <Text style={[styles.middleText, {fontSize: fontSize}]}>
        {middleText}
      </Text>
      <Image source={SmallLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '10%',
    marginTop: '4%',
    paddingHorizontal: '6%',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  middleText: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 25,
  },
});

export default Header;
