import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons, AntDesign,FontAwesome } from '@expo/vector-icons';

const CheckoutScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [visitDate, setVisitDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [promocode, setPromocode] = useState('');

  // Placeholder data for the order
  const orderData = {
    image: require('../assets/paris.jpeg'),
    name: 'Beautiful Resort',
    location: 'Paradise Island',
    rating: 4.8,
    price: 150,
  };

  const calculateTotalPrice = () => {
    // Add your logic to calculate the total price based on the order and quantity
    // For simplicity, multiplying the price by the number of people in this example
    const totalPrice = orderData.price * numberOfPeople;
    return totalPrice;
  };

  const handleApplyPromocode = () => {
    // Add your logic to apply the entered promocode
    // For simplicity, not implementing actual promocode logic in this example
  };

  const handlePayNow = () => {
    // Add your logic to handle the payment
    // For simplicity, displaying an alert in this example
    alert('Payment successful!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Customer Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Customer Information</Text>
        <Text>Name: {name}</Text>
        <Text>Email: {email}</Text>
      </View>

      {/* Order Details */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Order Details</Text>
        <Image source={orderData.image} style={styles.orderImage} />
        <Text style={styles.orderText}>{orderData.name}</Text>
        <Text style={styles.orderText}>{orderData.location}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#ffd700" />
          <Text style={styles.ratingText}>{orderData.rating}</Text>
        </View>
      </View>

      {/* Visit Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Visit Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Visit Date"
          value={visitDate}
          onChangeText={(text) => setVisitDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of People"
          keyboardType="numeric"
          value={numberOfPeople}
          onChangeText={(text) => setNumberOfPeople(text)}
        />
      </View>

      {/* Price and Payment */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Price and Payment</Text>
        <Text style={styles.priceText}>Price: ${orderData.price}</Text>
        <Text style={styles.priceText}>
          Total Price: ${calculateTotalPrice()}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Promocode"
          value={promocode}
          onChangeText={(text) => setPromocode(text)}
        />
        <TouchableOpacity
          style={styles.applyPromocodeButton}
          onPress={handleApplyPromocode}
        >
          <Text style={styles.applyPromocodeButtonText}>Apply Promocode</Text>
        </TouchableOpacity>
        
      </View>
      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Payment Method</Text>
        <View style={styles.card}>
          <FontAwesome name="cc-visa" size={30} color="#3498db" />
          <Text> Visa **** **** **** 1234</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome name="cc-mastercard" size={30} color="#e74c3c" />
          <Text> MasterCard **** **** **** 5678</Text>
        </View>
        <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
          <Text style={styles.payNowButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  orderImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 5,
  },
  applyPromocodeButton: {
    backgroundColor: '#00aa00',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  applyPromocodeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payNowButton: {
    backgroundColor: '#3498db',
    padding: 15,
    marginTop:20,
    borderRadius: 10,
    alignItems: 'center',
  },
  payNowButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
