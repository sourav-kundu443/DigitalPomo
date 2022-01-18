import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Asyncstorage from '@react-native-async-storage/async-storage';
import {
  SplashBackground,
  TransparentRectangle,
  LargeLogo,
} from '../../assets/images';

const SplashScreen = ({navigation}) => {
  const onPressHandler = () => {
    Asyncstorage.getItem('user_id').then(value =>
      navigation.replace(value === null ? 'Auth' : 'Home'),
    );
  };

  return (
    <View style={styles.SplashContainer}>
      <View>
        <ImageBackground
          source={SplashBackground}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <ImageBackground
            source={TransparentRectangle}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <Image source={LargeLogo} />
            <Text style={styles.title}>Pomo Digital</Text>
            <Text style={styles.details}>
              For managing and sharing Constriction Drawings, Documents and 3D
              models during construction and operation
            </Text>
          </ImageBackground>
        </ImageBackground>
      </View>
      <View style={styles.splashLowerPart}>
        <TouchableOpacity onPress={onPressHandler}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
            <Icon
              name="arrow-right"
              color="#FF7F00"
              size={25}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
