import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

import Logo from '../assets/images/logo.png';

const SmallLogo = () => {
  return (
    <View>
      <Image source={Logo} style={styles.logo} resizeMode='contain'/>
    </View>
  );
};

const styles = StyleSheet.create({
  
  logo: {
    position: 'absolute',


  },
});

export default SmallLogo;
