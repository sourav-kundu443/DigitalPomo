import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import Logo from '../../assets/images/logo.png';
import UserIcon2 from '../../assets/images/userIcon2.png';

import CustomButton from '../../components/CustomButton';

const VerificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.headerLogo} resizeMode="contain" />
        <Text style={styles.headerText}>
          You have successfully registered as a Customer!!
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.userContainer}>
          <Image source={UserIcon2} />
        </View>
        <Text style={styles.footerText}>
          Your user verification is under process
        </Text>
        <TouchableOpacity
          style={styles.btnView}
          onPress={() => navigation.navigate('HomeScreen')}>
          <CustomButton
            color="#F17400"
            title="Go to Homepage"
            style={styles.btnToHome}
            paddingHorizontal={12}
            marginVertical={30}
            paddingVertical={15}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationScreen;
