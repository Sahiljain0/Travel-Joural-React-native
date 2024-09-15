// WelcomeScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CurvedCard from '../componants/CurvedCard';







const WelcomeScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Image */}
      <ImageBackground source={require('../assets/tover.jpg')} style={styles.topImage}>
        {/* Content inside the top image, if needed */}
      </ImageBackground>

      {/* Curved Card at the Bottom */}
      <CurvedCard style={{flex:1}} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your background color
  },
  topImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen3;
