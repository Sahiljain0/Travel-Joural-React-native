// TourismDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';



const placeData = {
  id: '1',
  images: [
    require('../assets/beach.jpeg'),
    require('../assets/beach.jpeg'),
    // Add more images as needed
  ],
};
const TourismDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Image */}
      <ScrollView horizontal pagingEnabled>
        {placeData.images.map((image, index) => (
          <Image key={index} source={image} style={styles.sliderImage} />
        ))}
      </ScrollView>
      {/* Curved Card at the Bottom */}
      <View style={styles.bottomCard}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>Tourism Place Name</Text>
          <Text style={styles.address}>123 Main Street, City, Country</Text>
          {/* Add a logo image here if needed */}
        </View>
      </View>

      {/* Small Images Row */}
      <ScrollView horizontal style={styles.smallImagesContainer}>
        <Image source={require('../assets/beach.jpeg')} style={styles.smallImage} />
        <Image source={require('../assets/beach.jpeg')} style={styles.smallImage} />
        <Image source={require('../assets/paris.jpeg')} style={styles.smallImage} />
        {/* Add more small images as needed */}
      </ScrollView>

      {/* About Destination Section */}
      <View style={styles.aboutDestination}>
        <Text style={styles.sectionTitle}>About Destination</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImage: {
    width: '100%',
    height: 300, // Set the desired height of your top image
    resizeMode: 'cover',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  bottomCard: {
    marginHorizontal: 15,
    marginBottom: 20,
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
  },
  cardContent: {
    paddingVertical: 15,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: '#555',
  },
  smallImagesContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  smallImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover',
  },
  aboutDestination: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  sliderImage: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default TourismDetailScreen;
