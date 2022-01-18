import React, {useState, useRef} from 'react';
import {View, FlatList, Animated} from 'react-native';

import CarouselItem from './CarouselItem';

const Data = [
  {
    id: 1,
    text: 'Explore now >',
    image: require('../assets/images/sliderImage.png'),
  },
  {
    id: 2,
    text: 'Explore now >',
    image: require('../assets/images/sliderImage.png'),
  },
  {
    id: 3,
    text: 'Explore now >',
    image: require('../assets/images/sliderImage.png'),
  },
];
const Carousel = () => {
  return (
    <View>
      <FlatList
        data={Data}
        horizontal
        renderItem={({item}) => {
          return <CarouselItem item={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
