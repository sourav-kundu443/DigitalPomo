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
import infoIcon from '../../assets/images/icon/infoIcon.png';

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
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate(item.name)}>
          <Image
            source={item.image}
            style={styles.cardIcon}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} screenName='NewProject' color="#fff" />
      <View style={styles.imageContainer}>
        <Image source={Office} style={styles.image} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Multi-storey Residential Building(G+12)</Text>
        <View style={styles.cardContainer}>
          <FlatList
            data={formatData(DATA, numColumns)}
            renderItem={renderItem}
            // contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}
            numColumns={numColumns}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeDashboard;
