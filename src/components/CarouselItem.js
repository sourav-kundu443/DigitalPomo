import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {WIDTH} from '../constants';

import GreenTrans from '../assets/images/Rectangle4.png';

const CarouselItem = ({item}) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <TouchableOpacity>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
          <Image source={GreenTrans} style={styles.imageB} />
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    width: WIDTH,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    width: WIDTH - 70,
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '70%',
    borderRadius: 10,
  },
  imageB: {
    height: '100%',
    alignSelf: 'flex-end',
  },
  imageView: {
    width: '100%',
  },
  image: {
    position: 'absolute',
    alignSelf: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: 14,
    color: '#FF7F00',
    fontWeight: '500',
    marginTop: '35%',
    marginLeft: '5%',
  },
});

export default CarouselItem;
