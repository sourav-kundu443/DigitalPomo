import React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';

import Header from '../../components/Header';

import Office from '../../assets/images/office.png';

import DATA from './DATA';

const numColumns = 3;

const HomeDashboard = ({navigation}) => {
  const formatData = (DATA, numColumns) => {
    const totalRows = Math.floor(DATA.length / numColumns);
    let totalLastRows = DATA.length - totalRows * numColumns;

    while (totalLastRows !== 0 && totalLastRows !== numColumns) {
      DATA.push({text: 'blank', blank: true});
      totalLastRows++;
    }

    return DATA;
  };

  const renderItem = ({item}) => {
    let {card, itemInvisible} = styles;
    if (item.blank) {
      return <View style={itemInvisible} />;
    }
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={[styles.cardBody, {alignItems: 'center'}]}
          onPress={() => navigation.navigate(item.name)}>
          <View style={styles.imageView}>
            <Image
              source={item.image}
              style={styles.cardIcon}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header
          navigation={navigation}
          screenName="NewProject"
          color="#fff"
          middleText="Multi-storey Residential Building(G+12)"
          fontSize={18}
        />
        <View style={styles.imageContainer}>
          <Image source={Office} style={styles.image} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={formatData(DATA, numColumns)}
          renderItem={renderItem}
          numColumns={numColumns}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeDashboard;
