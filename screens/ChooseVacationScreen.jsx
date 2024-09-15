import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Make sure to install the 'expo-vector-icons' package

const imageData = [
  { id: '1', source: require('../assets/beach.jpeg'), name: 'Place 1', rating: 4.5 },
  { id: '2', source: require('../assets/beach.jpeg'), name: 'Place 2', rating: 4.0 },
  { id: '3', source: require('../assets/beach.jpeg'), name: 'Place 3', rating: 3.8 },
  { id: '4', source: require('../assets/beach.jpeg'), name: 'Place 4', rating: 4.2 },
  // Add more images as needed
];

const ChhoseVacationScreen = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    const isSelected = selectedImages.includes(imageId);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const renderImageCard = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.imageCard,
        selectedImages.includes(item.id) && styles.selectedImageCard,
      ]}
      onPress={() => toggleImageSelection(item.id)}
    >
      <Image source={item.source} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.rating}>Rating: {item.rating}</Text>
        {selectedImages.includes(item.id) && (
          <AntDesign name="check" size={20} color="#fff" style={styles.checkIcon} />
        )}
      </View>
    </TouchableOpacity>
  );

  const handleContinue = () => {
    // Add logic to navigate to the next screen or perform additional actions
    console.log('Selected Images:', selectedImages);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Your Favorites</Text>

      {/* Image Grid */}
      <FlatList
        data={imageData}
        renderItem={renderImageCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    
  },
  selectedImageCard: {
    borderColor: '#00aa00',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1, // Ensure images maintain their aspect ratio
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    justifyContent: 'flex-end',
  },
  placeName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    color: '#fff',
    fontSize: 14,
  },
  checkIcon: {
    marginTop: 5,
    width:27,
    backgroundColor:'green',
    borderRadius:'50%',
    padding:2,
  },
  continueButton: {
    backgroundColor: '#00aa00',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChhoseVacationScreen;
