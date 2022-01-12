import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {WIDTH} from '../constants';

const SearchBar = ({
  placeholder,
  backgroundColor,
  color,
  borderColor,
  borderBottomColor,
  placeholderTextColor,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.SearchBar,
          {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
            borderBottomColor: borderBottomColor,
          },
        ]}>
        <Icon name="search" color="#8C8C8C" size={20} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[styles.textInput, {color: color}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: '5%',
  },
  textInput: {
    width: '100%',
    fontSize: 17,
    letterSpacing: 1,
    paddingRight: '10%',
    paddingLeft: '5%',
  },
  SearchIconStyle: {
    height: 13,
    marginLeft: '7%',
    marginRight: '3%',
  },
});

export default SearchBar;
