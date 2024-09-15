import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  // Dummy data for personal information cards
  const personalInfoData = [
    { id: '1', icon: 'ios-person', heading: 'Name', detail: 'John Doe' },
    { id: '2', icon: 'ios-pin', heading: 'Location', detail: 'City, Country' },
    { id: '3', icon: 'ios-calendar', heading: 'Date of Birth', detail: 'January 1, 1990' },
    // Add more personal info cards as needed
  ];

  // Dummy data for security cards
  const securityData = [
    { id: '4', icon: 'ios-lock', heading: 'Change Password', greaterThan: true },
    { id: '5', icon: 'ios-finger-print', heading: 'Biometric Authentication', greaterThan: false },
    // Add more security cards as needed
  ];

  // Dummy data for general information cards
  const generalInfoData = [
    { id: '6', icon: 'ios-mail', heading: 'Email', detail: 'john.doe@example.com' },
    { id: '7', icon: 'ios-call', heading: 'Phone', detail: '+1 123-456-7890' },
    // Add more general info cards as needed
  ];

  // Dummy data for about card
  const aboutData = [
    { id: '8', icon: 'ios-information-circle', heading: 'About', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id aliquet elit.' },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={require('../assets/tover.jpg')} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userLocation}>City, Country</Text>
        </View>
        <TouchableOpacity style={styles.editIconContainer}>
          <Ionicons name="ios-create" size={24} color="#3498db" />
        </TouchableOpacity>
      </View>

      {/* Personal Information */}
      {renderInfoSection('Personal Info', personalInfoData)}

      {/* Security */}
      {renderInfoSection('Security', securityData)}

      {/* General Information */}
      {renderInfoSection('General Info', generalInfoData)}

      {/* About */}
      {renderInfoSection('About', aboutData)}
    </View>
    </ScrollView>
  );
};

const renderInfoSection = (sectionTitle, data) => {
  return (
    <View style={styles.infoSection}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InfoCard {...item} />
        )}
      />
    </View>
  );
};

const InfoCard = ({ icon, heading, detail, greaterThan }) => {
  return (
    <View style={styles.infoCard}>
      <Ionicons name={icon} size={24} color="#3498db" />
      <View style={styles.infoCardContent}>
        <Text style={styles.cardHeading}>{heading}</Text>
        <Text style={styles.cardDetail}>{detail}</Text>
      </View>
      {greaterThan && <Ionicons name="ios-arrow-forward" size={24} color="#3498db" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userLocation: {
    color: '#555',
  },
  editIconContainer: {
    marginLeft: 'auto',
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoCardContent: {
    marginLeft: 15,
    flex: 1,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetail: {
    color: '#555',
  },
});

export default ProfileScreen;
