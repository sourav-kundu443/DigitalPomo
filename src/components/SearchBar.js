import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {WIDTH} from '../constants';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBar}>
        <Icon name="search" color="#8C8C8C" size={20} />
        <TextInput placeholder="Search for project" style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#e5e5e5',
    borderColor: '#5F766B',
    borderRadius: 10,
    paddingHorizontal: '5%',
  },
  textInput: {
    width: '100%',
    color: '#333',
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
