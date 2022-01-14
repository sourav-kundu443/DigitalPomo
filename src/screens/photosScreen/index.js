import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import Header from '../../components/Header';

import DATA from './DATA';

const PhotosScreen = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header middleText="Photos" color="#fff" />
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          style={{marginTop: '8%'}}
        />
      </View>
    </View>
  );
};

export default PhotosScreen;
