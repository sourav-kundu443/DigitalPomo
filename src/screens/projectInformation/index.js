import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './style';

import Header from '../../components/Header';

import {InformationImage} from '../../assets/images';
import DATA from './DATA';

const ProjectInfo = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <View style={styles.bulletTitle}>
          <View style={styles.bullet}></View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
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
        />
        <Image
          source={InformationImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.footerTitle}>Projects Information</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ProjectInfo;
