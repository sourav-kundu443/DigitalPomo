import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

import SearchBar from '../../components/SearchBar';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

import DATA from './DATA';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={[styles.project, {justifyContent: 'center'}]}>
        <Image
          source={item.image}
          style={styles.projectImage}
          resizeMode="cover"
        />
        <Text style={styles.projectNum}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header text="Pomo Digital" color="#FF7F00" />
        <View style={styles.slider}>
          <Carousel />
        </View>

        <SearchBar
          placeholder="Search for project"
          backgroundColor="#444444"
          color="#fff"
          borderColor="#444444"
          placeholderTextColor="#8C8C8C"
          style={styles.searchBar}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerTop}>
          <View style={styles.top}>
            <Text style={styles.text}>Projects</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NewProject')}>
              <CustomButton
                title="+ New Project"
                color="#000"
                paddingHorizontal={15}
                marginVertical={15}
                paddingVertical={10}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
