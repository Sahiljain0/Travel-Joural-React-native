import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Make sure to install the 'expo-vector-icons' package

const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Arabic',
  'Russian',
  'Hindi',
  // Add more languages as needed
];

const SelectLanguageScreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageItem,
        selectedLanguage === item && styles.selectedLanguageItem,
      ]}
      onPress={() => handleLanguageSelect(item)}
    >
      <Text style={[styles.languageText, selectedLanguage === item && styles.selectedLanguageText]}>
        {item}
      </Text>
      {selectedLanguage === item && (
        <AntDesign name="check" size={20} color="#fff" style={styles.checkIcon} />
      )}
    </TouchableOpacity>
  );

  const handleContinue = () => {
    // Add logic to navigate to the next screen or perform additional actions
    console.log(`Selected language: ${selectedLanguage}`);
    navigation.navigate('choose')
  };

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Select Your Language</Text>

      {/* Language Input */}
      <TouchableOpacity
        style={styles.languageInput}
        onPress={() => setModalVisible(true)}
      >
        <Text>{selectedLanguage || 'Select Language'}</Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Language Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Language List */}
          <FlatList
            data={languages}
            renderItem={renderLanguageItem}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#00aa00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  languageItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedLanguageItem: {
    backgroundColor: '#00aa00',
  },
  languageText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
  selectedLanguageText: {
    fontWeight: 'bold',
  },
  checkIcon: {
    marginLeft: 'auto',
  },
});

export default SelectLanguageScreen;
