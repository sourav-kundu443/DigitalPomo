import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import Header from '../../components/Header';

import Image1 from '../../assets/images/architecture1.png';

import DATA from './DATA';

const PhotosScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Image source={Imageg} style={styles.image} resizeMode="contain" /> */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Photos</Text>
        <View style={styles.centerField}>
          <View style={styles.formField}>
            <View style={styles.imageCard}>
              <Image source={Image1} style={styles.footerImage} />
            </View>
            <View style={styles.textCard}>
                <View style={styles.textRow}>
                    <Text style={styles.textBold}>Name:</Text>
                    <Text style={styles.text}>Pomo Digital</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.textBold}>Location:</Text>
                    <Text style={styles.text}>Aaron Hawkins 5587 Nunc. Avenue Erie Rhode Island 24975 (660) 663-4518</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.textBold}>Author:</Text>
                    <Text style={styles.text}>Pomo Digital</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhotosScreen;
