import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';

import styles from './style';

import Header from '../../components/Header';

import { ContactTopImage, OrganizationIcon, ScannerIcon, GlobeIcon, DisciplineIcon, DownArrowIcon } from '../../assets/images';

const Contacts = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Image source={ContactTopImage} style={styles.image} resizeMode="contain" />
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
      </View>
    </View>
  );
};

export default Contacts;
