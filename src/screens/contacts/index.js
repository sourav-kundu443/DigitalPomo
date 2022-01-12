import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';

import styles from './style';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import {
  ContactTopImage,
  OrganizationIcon,
  ScannerIcon,
  GlobeIcon,
  DisciplineIcon,
  DownArrowIcon,
} from '../../assets/images';

// const DATA = [
//   {
//     id: 1,
//     image: require('../../assets/images/icon/building.png'),
//     text: 'Projects Information',
//     name: 'Organisation Name:',
//   },
//   {
//     id: 2,
//     image: require('../../assets/images/icon/scanner.png'),
//     text: 'Project Milestones',
//     name: 'Timeline',
//   },
//   {
//     id: 3,
//     image: require('../../assets/images/icon/globe.png'),
//     text: 'Contacts',
//     name: 'Contacts',
//   },
//   {
//     id: 4,
//     image: require('../../assets/images/icon/discipline.png'),
//     icon: require('../../assets/images/icon/down_arrow.png'),
//     text: '3D Models',
//     name: 'Models',
//   },
// ];

const Contacts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header
          navigation={navigation}
          screenName="HomeDashboard"
          color="#fff"
        />
        <Text style={styles.titleText}>Contacts</Text>
        <View style={styles.searchBarView}>
          <SearchBar
            placeholder="Search for project"
            placeholderTextColor="#fff"
            backgroundColor="#000"
            color="#fff"
            borderBottomColor="#fff"
            style={styles.searchBar}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/* <Text style={styles.titleText}>Contact</Text> */}
      </View>
      {/* <Header navigation={navigation} screenName="HomeDashboard" color="#fff" />
      <Image
        source={ContactTopImage}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Contact</Text>

        <View>
          <View style={styles.formField}>
            <Image source={OrganizationIcon} style={styles.icon} />
            <View>
              <Text style={styles.textTitle}>Organisation Name:</Text>
              <Text style={styles.text}>
                Pomo Digital Construction Pvt. LTD
              </Text>
            </View>
          </View>
          <View style={styles.formField}>
            <Image source={ScannerIcon} style={styles.icon} />
            <View>
              <Text style={styles.textTitle}>Abbreviation code:</Text>
              <Text style={styles.text}>2009-1-PL1-LEO05-05016</Text>
            </View>
          </View>
          <View style={styles.formField}>
            <Image source={GlobeIcon} style={styles.icon} />
            <View>
              <Text style={styles.textTitle}>Website:</Text>
              <Text style={styles.text}>www.pomodigital.com</Text>
            </View>
          </View>

          <View style={styles.formField}>
            <Image source={DisciplineIcon} style={styles.icon} />
            <View style={styles.discipline}>
              <Text style={styles.textTitle}>Discipline:</Text>

              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={DownArrowIcon}
                  style={styles.downArrowIcon}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default Contacts;
