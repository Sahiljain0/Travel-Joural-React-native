// EntryScreen.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';




const AppEntryScreen = ({navigation}) => {

  setTimeout(()=>navigation.navigate('Welcome1'),2000)
  return (
    <View style={styles.container}>
      {/* App Name */}
      <Text style={styles.appName}>Travellers</Text>

      {/* Loading Spinner */}
      <ActivityIndicator size="large" color="#ffffff" style={styles.loadingSpinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aa00', // Set the desired background color (green in this case)
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff', // Set the desired text color (white in this case)
    marginBottom: 20,
  },
  loadingSpinner: {
    marginTop: 20,
  },
});

export default AppEntryScreen;
