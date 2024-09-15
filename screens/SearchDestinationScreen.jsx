import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const recommendationData = [
  {
    id: '1',
    image: require('../assets/tover.jpg'),
    likeIcon: 'hearto',
    heading: 'Beautiful Resort',
    location: 'Paradise Island',
    price: '$150/night',
    rating: 4.8,
    date: new Date('2023-05-15'),
  },
  {
    id: '2',
    image: require('../assets/tover.jpg'),
    likeIcon: 'hearto',
    heading: 'Cozy Cabin',
    location: 'Mountain Retreat',
    price: '$100/night',
    rating: 4.5,
    date: new Date('2023-05-20'),
  },
  {
    id: '3',
    image: require('../assets/tover.jpg'),
    likeIcon: 'hearto',
    heading: 'Seaside Villa',
    location: 'Tropical Paradise',
    price: '$200/night',
    rating: 4.9,
    date: new Date('2023-05-18'),
  },
  {
    id: '4',
    image: require('../assets/tover.jpg'),
    likeIcon: 'hearto',
    heading: 'Urban Loft',
    location: 'City Center',
    price: '$120/night',
    rating: 4.2,
    date: new Date('2023-05-22'),
  },
  // Add more recommendations as needed
];

const SearchDestinationScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [likeStatus, setLikeStatus] = useState({});
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByLocation, setSortByLocation] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const toggleLike = (itemId) => {
    setLikeStatus((prevStatus) => ({
      ...prevStatus,
      [itemId]: !prevStatus[itemId],
    }));
  };

  const sortData = (data) => {
    let sortedData = [...data];
    if (sortByDate) {
      sortedData.sort((a, b) => a.date - b.date);
    }
    if (sortByLocation) {
      sortedData.sort((a, b) => a.location.localeCompare(b.location));
    }
    return sortedData;
  };

  const filteredData = recommendationData.filter(
    (item) =>
      item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedAndFilteredData = sortData(filteredData);

  const renderRecommendationCard = ({ item }) => (
    <TouchableOpacity
      style={styles.recommendationCard}
      onPress={() => toggleLike(item.id)}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.recommendationImage} />
        <TouchableOpacity
          style={styles.likeIconContainer}
          onPress={() => toggleLike(item.id)}
        >
          <AntDesign
            name={likeStatus[item.id] ? 'heart' : 'hearto'}
            size={24}
            color={likeStatus[item.id] ? '#e74c3c' : '#fff'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.recommendationDetails}>
        <Text style={styles.recommendationHeading}>{item.heading}</Text>
        <Text style={styles.recommendationLocation}>{item.location}</Text>
        <Text style={styles.recommendationPrice}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#ffd700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderDatePickerModal = () => (
    <Modal
      transparent
      animationType="slide"
      visible={dateModalVisible}
      onRequestClose={() => setDateModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        {/* Your date picker or filter components here */}
        <Text>Date Picker Modal</Text>
        <TouchableOpacity
          onPress={() => setDateModalVisible(false)}
          style={styles.closeModalButton}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const renderLocationPickerModal = () => (
    <Modal
      transparent
      animationType="slide"
      visible={locationModalVisible}
      onRequestClose={() => setLocationModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        {/* Your location picker or filter components here */}
        <Text>Location Picker Modal</Text>
        <TouchableOpacity
          onPress={() => setLocationModalVisible(false)}
          style={styles.closeModalButton}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Search Destinations</Text>
      </View>

      {/* Search Input and Filters */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
        <View style={styles.filterIcons}>
          <TouchableOpacity
            style={[styles.filterIcon, sortByDate && styles.activeFilter]}
            onPress={() => setDateModalVisible(true)}
          >
            <Text>Date</Text>
            <Ionicons name="calendar" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterIcon, sortByLocation && styles.activeFilter]}
            onPress={() => setLocationModalVisible(true)}
          >
            <Text>Location</Text>
            <Ionicons name="location" size={24} color="#000" />
          </TouchableOpacity>
        </View>

      {/* Recommendations */}
      <FlatList
        data={sortedAndFilteredData}
        renderItem={renderRecommendationCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.recommendationList}
      />

      {renderDatePickerModal()}
      {renderLocationPickerModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  filterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  filterIcon: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginLeft: 10,
    flexDirection:'row',
    alignItems:'center',
    gap:5,
  },
  activeFilter: {
    backgroundColor: '#00aa00',
  },
  recommendationList: {
    marginTop: 10,
  },
  recommendationCard: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  recommendationImage: {
    width: '100%',
    aspectRatio: 1,
  },
  likeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  recommendationDetails: {
    padding: 10,
  },
  recommendationHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendationLocation: {
    fontSize: 14,
    color: '#777',
  },
  recommendationPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00aa00',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeModalButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});

export default SearchDestinationScreen;
