import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const BookingScreen = () => {
  const sourceLocation = 'Trinity College of Engineering and Research, Bhopal';
  const destinationLocation = 'Destination Location';

  const handleVehicleChange = () => {
    // Handle vehicle change
    console.log('Vehicle changed');
  };

  const handleLocalTabPress = () => {
    // Handle local tab press
    console.log('Local tab pressed');
  };

  const handleOutsideTabPress = () => {
    // Handle outside tab press
    console.log('Outside tab pressed');
  };

  const handleRideButtonPress = () => {
    // Handle ride button press
    console.log('Ride button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={[styles.locationText, styles.greenText]}>Source: {sourceLocation}</Text>
        <Text style={[styles.locationText, styles.redText]}>Destination: {destinationLocation}</Text>
      </View>
      {/* <View style={styles.vehicleCard}>
        <Image source='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' style={styles.vehicleImage} />
        <Text style={styles.vehicleName}>Vehicle Name</Text>
        <TouchableOpacity onPress={handleVehicleChange} style={styles.changeVehicleButton}>
          <Text style={styles.changeVehicleButtonText}>Change Vehicle</Text>
        </TouchableOpacity>
      </View> */}
     
      <TouchableOpacity onPress={handleRideButtonPress} style={styles.rideButton}>
        <Text style={styles.rideButtonText}>Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'rgba(200, 200, 200, 0.7)'

  },
  locationContainer: {
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 10,
  },
  greenText: {
    color: 'green',
  },
  redText: {
    color: 'red',
  },
  vehicleCard: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 20,
    alignItems: 'center',
  },
  vehicleImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  changeVehicleButton: {
    backgroundColor: '#1b2456',
    padding: 15,
    borderRadius: 10,
  },
  changeVehicleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#1b2456',
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
  },
  tabLeft: {
    marginRight: 5,
  },
  tabRight: {
    marginLeft: 5,
  },
  tabButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  rideButton: {
    backgroundColor: '#1b2456',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  rideButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BookingScreen;
