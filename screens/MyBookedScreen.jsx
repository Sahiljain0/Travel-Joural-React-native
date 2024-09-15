import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const MyBookedScreen = () => {
  return (<>
        
    <Tab.Navigator>
      <Tab.Screen name="Booked" component={BookedTab} />
      <Tab.Screen name="History" component={HistoryTab} />
    </Tab.Navigator>
    </>
  );
};

const BookedTab = () => {
  // Placeholder data for booked hotels
  const bookedHotels = [
    {
      id: '1',
      date: '2023-01-15',
      welcomeText: 'Welcome to Paradise Hotel!',
      image: require('../assets/tover.jpg'),
      name: 'Paradise Hotel',
      location: 'Paradise Island, XYZ',
      rating: 4.5,
      totalPrice: 150,
    },
    {
      id: '1',
      date: '2023-01-15',
      welcomeText: 'Welcome to Paradise Hotel!',
      image: require('../assets/tover.jpg'),
      name: 'Paradise Hotel',
      location: 'Paradise Island, XYZ',
      rating: 4.5,
      totalPrice: 150,
    },
    {
      id: '1',
      date: '2023-01-15',
      welcomeText: 'Welcome to Paradise Hotel!',
      image: require('../assets/tover.jpg'),
      name: 'Paradise Hotel',
      location: 'Paradise Island, XYZ',
      rating: 4.5,
      totalPrice: 150,
    },
    // Add more booked hotels as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {bookedHotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </ScrollView>
  );
};

const HistoryTab = () => {
  // Placeholder data for booking history
  const bookingHistory = [
    {
      id: '1',
      date: '2022-12-01',
      welcomeText: 'Thank you for staying with us!',
      image: require('../assets/beach.jpeg'),
      name: 'Luxury Resort',
      location: 'Coastal City, ABC',
      rating: 4.8,
      totalPrice: 200,
    },
    // Add more booking history as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {bookingHistory.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </ScrollView>
  );
};

const HotelCard = ({ date, welcomeText, image, name, location, rating, totalPrice }) => {
  return (
    <View style={styles.card}>
      <View style={styles.bookingInfo}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.welcomeText}>{welcomeText}</Text>
      </View>
      <View style={styles.hotelInfo}>
        <Image source={image} style={styles.hotelImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.hotelName}>{name}</Text>
          <Text style={styles.locationText}>{location}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#ffd700" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalPriceText}>Total Price: ${totalPrice}</Text>
        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.detailButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  bookingInfo: {
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  hotelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  hotelImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    marginLeft: 15,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationText: {
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: 16,
    color: '#555',
  },
  detailButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyBookedScreen;
