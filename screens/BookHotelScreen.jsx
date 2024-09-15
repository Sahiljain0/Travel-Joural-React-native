import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const BookHotelScreen = () => {
  // Placeholder data for order information
  const orderData = {
    image: require('../assets/paris.jpeg'),
    name: 'Luxury Paradise Hotel',
    location: 'Paradise Island, XYZ',
    rating: 4.8,
  };

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleContinue = () => {
    // Add your logic to handle the continuation
    // For simplicity, displaying an alert in this example
    alert('Continue button pressed!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Customer Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Customer Information</Text>
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
      </View>

      {/* Order Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Order Information</Text>
        <View style={styles.orderContainer}>
          <Image source={orderData.image} style={styles.orderImage} />
          <View style={styles.orderInfo}>
            <Text style={styles.orderName}>{orderData.name}</Text>
            <Text style={styles.orderLocation}>{orderData.location}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#ffd700" />
              <Text style={styles.ratingText}>{orderData.rating}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Common Facilities */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Common Facilities</Text>
        <View style={styles.facilitiesContainer}>
          {/* Reuse the FacilityItem component from the HotelDetailScreen example */}
          <FacilityItem icon="wifi" name="Free Wi-Fi" />
          <FacilityItem icon="pool" name="Swimming Pool" />
          <FacilityItem icon="restaurant" name="Restaurant" />
          <FacilityItem icon="car" name="Parking" />
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Stay Time */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Stay Time</Text>
        <View style={styles.stayTimeContainer}>
          <View style={styles.dateContainer}>
            <FontAwesome name="calendar" size={24} color="#3498db" />
            <TextInput
              style={styles.dateInput}
              placeholder="Check In"
              value={checkInDate}
              onChangeText={(text) => setCheckInDate(text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dateContainer}>
            <FontAwesome name="calendar" size={24} color="#3498db" />
            <TextInput
              style={styles.dateInput}
              placeholder="Check Out"
              value={checkOutDate}
              onChangeText={(text) => setCheckOutDate(text)}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// FacilityItem component for common facilities
const FacilityItem = ({ icon, name }) => (
  <View style={styles.facilityItem}>
    <FontAwesome name={icon} size={24} color="#3498db" />
    <Text style={styles.facilityName}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 15,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderContainer: {
    flexDirection: 'row',
  },
  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  orderInfo: {
    marginLeft: 15,
  },
  orderName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderLocation: {
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
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  facilityItem: {
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'row',
  },
  facilityName: {
    marginLeft: 5,
  },
  viewAllButton: {
    marginTop: 10,
  },
  viewAllText: {
    color: '#3498db',
    fontSize: 16,
  },
  stayTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    flex: 1,
  },
  continueButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 15,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookHotelScreen;
