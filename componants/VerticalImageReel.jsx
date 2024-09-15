// VerticalImageReel.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
// const Swiper = require('react-native-swiper');
import Swiper from 'react-native-swiper/src';

const VerticalImageReel = () => {
  const images = [
    require('../assets/paris.jpeg'),
    require('../assets/beach.jpeg'),
    // require('./images/image3.jpg'),
    // Add more images as needed
  ];

  return (
    <View style={styles.container}>
      <Swiper style={styles.swiperContainer} showsButtons={false} autoplay={true} vertical={true}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    height: 200, // Set the desired height of your image reel
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default VerticalImageReel;
