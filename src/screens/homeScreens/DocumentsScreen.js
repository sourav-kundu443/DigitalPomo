import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Header from '../../components/Header';
import styles from './style';

import {DocumentImage} from '../../assets/images';

const DocumentScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={DocumentImage} style={styles.image} resizeMode="contain" />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Documents</Text>
        <View style={{borderBottomWidth: 1, borderColor: '#DEDEDE'}}></View>
        <View style={styles1.row}>
          <Text style={styles1.titleText}>Name</Text>
          <View  style={styles1.cards}>
            <View style={styles1.fileCard}>
              <Text>hhsgh</Text>
            </View>
            <View style={styles1.fileCard}>
              <Text>hhsgh</Text>
            </View>
            <View style={styles1.fileCard}>
              <Text>hhsgh</Text>
            </View>
            <View style={styles1.fileCard}>
              <Text>hhsgh</Text>
            </View>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#DEDEDE'}}></View>
        <View style={styles1.row}>
          <Text style={styles1.titleText}>Description</Text>
          <Text style={styles1.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            voluptatum sint fuga harum vel. Illo est esse cupiditate culpa
            numquam ipsam, nesciunt eos! Eum veritatis ea alias velit, ducimus
            placeat.
          </Text>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#DEDEDE'}}></View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
    letterSpacing: 0.9,
    lineHeight: 25,
  },
  row: {
    marginVertical: '5%',
  },
  descriptionText: {
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'justify',
    marginTop: '4%',
  },
  cards: {
    flexDirection: 'row'
  },
  fileCard: {
    borderWidth: 0.8,
    width: 80,
    height: 80,
    borderRadius: 8,
    borderColor: '#C1C1C1',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
});

export default DocumentScreen;
