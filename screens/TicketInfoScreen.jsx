import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const detailedTicketData = {
  bookingId: 'B123456789',
  welcomeText: 'Thank you for choosing our hotel!',
  hotelImage: require('../assets/beach.jpeg'),
  hotelName: 'Grand Resort',
  location: 'City Center, XYZ',
  rating: 4.7,
  customerName: 'John Doe',
  customerEmail: 'john.doe@example.com',
  checkOutDate: '2023-01-20',
  roomType: 'Deluxe Room',
  totalAmount: 250,
  promoCodeDiscount: 25,
  totalPayAmount: 225,
};
const TicketInfoScreen = () => {
  // Extracting data from the route
  const {
    bookingId,
    welcomeText,
    hotelImage,
    hotelName,
    location,
    rating,
    customerName,
    customerEmail,
    checkOutDate,
    roomType,
    totalAmount,
    promoCodeDiscount,
    totalPayAmount,
  } = detailedTicketData;

  const handleDownloadPDF = () => {
    // Add logic to download PDF
    // For simplicity, displaying an alert in this example
    alert('PDF Downloaded!');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="ios-checkmark-circle" size={80} color="#2ecc71" />
        <Text style={styles.successText}>Booking Successful!</Text>
      </View>

      {/* Detailed Ticket Information */}
      <View style={styles.detailedTicket}>
        {/* Booking ID and Welcome Text */}
        <View style={styles.bookingInfo}>
          <Text style={styles.bookingId}>Booking ID: {bookingId}</Text>
          <Text style={styles.welcomeText}>{welcomeText}</Text>
        </View>

        {/* Hotel Information */}
        <View style={styles.hotelInfo}>
          <Image source={hotelImage} style={styles.hotelImage} />
          <View style={styles.hotelDetails}>
            <Text style={styles.hotelName}>{hotelName}</Text>
            <Text style={styles.locationText}>{location}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#ffd700" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>
        </View>

        {/* Customer Information */}
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Customer Information</Text>
          <Text>Name: {customerName}</Text>
          <Text>Email: {customerEmail}</Text>
          <Text>Check-out Date: {checkOutDate}</Text>
          <Text>Type of Room: {roomType}</Text>
        </View>

        {/* Payment Details */}
        <View style={styles.paymentDetails}>
          <Text style={styles.label}>Payment Details</Text>
          <Text>Total Amount: ${totalAmount}</Text>
          <Text>Promo Code Discount: ${promoCodeDiscount}</Text>
          <Text>Total Pay Amount: ${totalPayAmount}</Text>
        </View>

        {/* Download PDF Button */}
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPDF}>
          <Text style={styles.downloadButtonText}>Download PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2ecc71',
  },
  detailedTicket: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
  },
  bookingInfo: {
    marginBottom: 20,
  },
  bookingId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  hotelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  hotelImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  hotelDetails: {
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
  customerInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paymentDetails: {
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TicketInfoScreen;
