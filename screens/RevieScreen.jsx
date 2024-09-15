import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const RevieScreen = () => {
  // Dummy data for reviews
  const reviews = [
    {
      id: '1',
      reviewerImage: require('../assets/beach.jpeg'),
      reviewerName: 'Jane Doe',
      date: '2023-01-10',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu vel libero hendrerit bibendum.',
      reviewImage: require('../assets/paris.jpeg'),
    },
    {
      id: '1',
      reviewerImage: require('../assets/beach.jpeg'),
      reviewerName: 'Jane Doe',
      date: '2023-01-10',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu vel libero hendrerit bibendum.',
      reviewImage: require('../assets/paris.jpeg'),
    },
    {
      id: '1',
      reviewerImage: require('../assets/beach.jpeg'),
      reviewerName: 'Jane Doe',
      date: '2023-01-10',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu vel libero hendrerit bibendum.',
      reviewImage: require('../assets/paris.jpeg'),
    },
    {
      id: '1',
      reviewerImage: require('../assets/beach.jpeg'),
      reviewerName: 'Jane Doe',
      date: '2023-01-10',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu vel libero hendrerit bibendum.',
      reviewImage: require('../assets/paris.jpeg'),
    },
    // Add more reviews as needed
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </View>
    </ScrollView>
  );
};

const ReviewCard = ({ reviewerImage, reviewerName, date, rating, content, reviewImage }) => {
  return (
    <View style={styles.reviewCard}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>

      <View style={styles.reviewDetails}>
      <Image source={reviewerImage} style={styles.reviewerImage} />
        <Text style={styles.reviewerName}>{reviewerName}</Text>
      </View>
        <Text style={styles.dateText}>{date}</Text>
        </View>
      <View style={styles.ratingContainer}>
        <Ionicons name="ios-star" size={24} color="#ffd700" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
      {reviewImage && <Image source={reviewImage} style={styles.reviewImage} />}
      <Text style={styles.reviewContent}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  reviewCard: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewDetails: {
    marginLeft: 10,
    flexDirection:'row',
    gap:15
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft:10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewContent: {
    marginTop: 10,
    fontSize: 16,
  },
  reviewImage: {
    marginTop: 10,
    width: '25%',
    height: '80%',
    borderRadius: 10,
  },
});

export default RevieScreen;
