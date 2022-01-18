import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

import Header from '../../components/Header';

import {TransparentImage} from '../../assets/images';
const Projectmilestones = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header
          navigation={navigation}
          screenName="HomeDashboard"
          color="#fff"
          middleText="Projects Milestones"
          fontSize={20}
        />
        <View style={styles.imageView}>
          <Image source={TransparentImage} />
        </View>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

export default Projectmilestones;
