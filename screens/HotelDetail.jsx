import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HotelDetail = () => {
  // Placeholder data for image slider
  const images = [
    require('../assets/tover.jpg'),
    require('../assets/tover.jpg'),
    require('../assets/tover.jpg'),
  ];

  // Placeholder data for common facilities
  const facilities = [
    { icon: 'wifi', name: 'Free Wi-Fi' },
    { icon: 'pool', name: 'Swimming Pool' },
    { icon: 'restaurant', name: 'Restaurant' },
    { icon: 'car', name: 'Parking' },
  ];

  // Placeholder data for reviews
  const reviews = [
    { name: 'John Doe', rating: 4.5, comment: 'Great experience! Highly recommended.' },
    { name: 'Jane Smith', rating: 5, comment: 'Amazing hotel with excellent service.' },
    { name: 'Bob Johnson', rating: 3.5, comment: 'Decent stay, but some improvements needed.' },
  ];

  const renderFacilityItem = ({ item }) => (
    <View style={styles.facilityItem}>
      <FontAwesome name={item.icon} size={24} color="#3498db" />
      <Text style={styles.facilityName}>{item.name}</Text>
    </View>
  );

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewName}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#ffd700" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <Text style={styles.commentText}>{item.comment}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Image Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageSlider}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>

      {/* Hotel Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.hotelName}>Luxury Paradise Hotel</Text>
        <Text style={styles.locationText}>Paradise Island, XYZ</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={20} color="#ffd700" />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart" size={24} color="#e74c3c" />
        </TouchableOpacity>
      </View>

      {/* Common Facilities */}
      <View style={styles.facilitiesContainer}>
        <Text style={styles.facilityHeading}>Common Facilities</Text>
        <FlatList
          data={facilities}
          renderItem={renderFacilityItem}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Hotel Details */}
      <View style={styles.detailContainer}>
        <Text style={styles.detailHeading}>Hotel Details</Text>
        <Text style={styles.detailText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod bibendum nulla,
          vel feugiat ligula tincidunt eu. Duis at dapibus justo. Vestibulum vitae leo nec
          velit congue tincidunt.
        </Text>
      </View>

      {/* Reviews */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewHeading}>Reviews</Text>
        <FlatList
          data={reviews}
          renderItem={renderReviewItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageSlider: {
    height: 200,
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 10,
  },
  infoContainer: {
    padding: 15,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
  likeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  facilitiesContainer: {
    padding: 15,
  },
  facilityHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  facilityItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  facilityName: {
    marginTop: 5,
  },
  viewAllButton: {
    marginTop: 10,
  },
  viewAllText: {
    color: '#3498db',
    fontSize: 16,
  },
  detailContainer: {
    padding: 15,
  },
  detailHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
  },
  reviewsContainer: {
    padding: 15,
  },
  reviewHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewItem: {
    marginBottom: 20,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 16,
    color: '#555',
  },
});

export default HotelDetail;
