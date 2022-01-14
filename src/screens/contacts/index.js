import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import styles from './style';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import {
  UserIcon,
  UserIconOrange,
  PhonelIcon,
  BuildinglIcon,
} from '../../assets/images';

const DATA = [
  {
    id: 1,
    name: 'John Muhone',
    role: 'Architect',
    email: 'johnmuhone@pamodigital.com',
    phone: '+447405445932',
    company: 'Pomo Digital Construction LTD',
  },
  {
    id: 2,
    name: 'John Muhone',
    role: 'Structural Engineer',
    email: 'ruthmwale@MC2.com',
    phone: '+447405445932',
    company: 'MC2 Structural LTD',
  },
  {
    id: 3,
    name: 'John Muhone',
    role: 'Architect',
    email: 'johnmuhone@pamodigital.com',
    phone: '+447405445932',
    company: 'Pomo Digital Construction LTD',
  },
  {
    id: 4,
    name: 'John Muhone',
    role: 'Architect',
    email: 'johnmuhone@pamodigital.com',
    phone: '+447405445932',
    company: 'Pomo Digital Construction LTD',
  },
];

const Contacts = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Image source={UserIcon} />
          <View style={[styles.textView, styles.marginText]}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textCommon}>{item.role}</Text>
          </View>
        </View>
        <View style={styles.cardRow}>
          <Image source={UserIconOrange} />
          <Text style={[styles.textCommon, styles.marginText]}>
            {item.email}
          </Text>
        </View>
        <View style={styles.cardRow}>
          <Image source={PhonelIcon} />
          <Text style={[styles.textCommon, styles.marginText]}>
            {item.phone}
          </Text>
        </View>
        <View style={styles.cardRow}>
          <Image source={BuildinglIcon} />
          <Text style={[styles.textCommon, styles.marginText]}>
            {item.company}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header
          navigation={navigation}
          screenName="HomeDashboard"
          color="#fff"
          middleText="Contacts"
        />

        <View style={styles.searchBarView}>
          <SearchBar
            placeholder="Search for project"
            placeholderTextColor="#8C8C8C"
            backgroundColor="#000"
            color="#fff"
            borderBottomColor="#8C8C8C"
            style={styles.searchBar}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={{width: '90%', marginVertical: '5%'}}
        />
      </View>
    </View>
  );
};

export default Contacts;
