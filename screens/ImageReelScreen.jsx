// ImageReelScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import VerticalImageReel from '../componants/VerticalImageReel';

const ImageReelScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VerticalImageReel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageReelScreen;
