// HotelViewScreen.js
import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ViewScreen = () => {
  return (
      <ImageBackground source={require('../assets/tover.jpg')} resizeMode="cover" style={styles.backgroundImage}>
    <ScrollView style={styles.container}>
      {/* Background Image */}
        {/* Hotel Names with Distances */}
        <View style={styles.hotelList}>
          <Text style={styles.hotelName}>Hotel A</Text>
          <Text style={styles.distance}>0.5 km away</Text>

          <Text style={styles.hotelName}>Hotel B</Text>
          <Text style={styles.distance}>1.2 km away</Text>

          {/* Add more hotels as needed */}
        </View>

      {/* Rounded Card at the Bottom */}
      <View style={styles.bottomCard}>
        <View style={[styles.cardContainer]}>
        <View style={styles.cardContent}>
          <Text style={styles.name}>Hotel A</Text>
          <Text style={styles.address}>123 Main Street, City, Country</Text>
          <Text style={styles.distance}>Distance: 0.5 km</Text>
          <Text style={styles.rating}>Rating: 4.5</Text>

          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </ScrollView>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)' ,
        borderRadius: 20,
        // elevation: 5,
      },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    // height: 700, 
    flex:1,
    resizeMode: 'cover',
  },
  hotelList: {
    backgroundColor: 'rgba(0,0,0,0.7)' ,
    
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius:20,
    marginVertical:20,
    marginHorizontal:60,
    
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    marginBottom: 5,
  },
  distance: {
    fontSize: 14,
    color:'white',
    marginBottom: 20,
  },
  bottomCard: {
    margin: 20,
    marginTop:200,
    // position:'absolute',
    
  },
  cardContent: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    color:'white',
  },
  rating: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    color:'white',
  },
  bookNowButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewScreen;
