// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import WebView from 'react-native-webview';

// const Map = () => {
//   // 23.25699845063576, 77.51079138674716
//   const latitude = 23.25699845063576;
//   const longitude = 77.51079138674716;
//   const sourceLocation = 'Trinity College of Engineering and Research, Bhopal';
//   const destinationLocation = 'Destination Location';
//   const patientDetails = {
//     name: 'John Doe',
//     age: 30,
//     condition: 'Critical'
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         source={{
//           html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.140246315804!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e837437dc4d29%3A0x89a565bf43c61ea7!2sTrinity%20College%20of%20Engineering%20and%20Research%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1647737735961!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
//         }}
//         style={{ flex: 1 }}
//       />
//       <View style={styles.bookingContainer}>
//         <Text style={styles.bookingText}>Booking Details</Text>
//         <Text style={styles.locationText}><Text style={styles.bold}>Source:</Text> {sourceLocation}</Text>
//         <Text style={styles.locationText}><Text style={styles.bold}>Destination:</Text> {destinationLocation}</Text>
//         <Text style={styles.patientText}><Text style={[styles.bold, styles.underline]}>Patient Name:</Text> {patientDetails.name}</Text>
//         <Text style={styles.patientText}><Text style={styles.bold}>Age:</Text> {patientDetails.age}</Text>
//         <Text style={styles.patientText}><Text style={styles.bold}>Condition:</Text> {patientDetails.condition}</Text>
//         {/* Add your booking details here */}
//         <TouchableOpacity style={styles.bookButton}>
//           <Text style={styles.bookButtonText}>Book Ambulance</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bookingContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     padding: 20,
//     backgroundColor: 'orange',
//     borderRadius: 10,
//     alignItems: 'center'
//   },
//   bookingText: {
//     color: 'white',
//     fontSize: 22,
//     marginBottom: 10,
//     fontWeight: 'bold'
//   },
//   locationText: {
//     color: 'white',
//     fontSize: 16,
//     marginBottom: 5
//   },
//   patientText: {
//     color: 'white',
//     fontSize: 16,
//     marginBottom: 5
//   },
//   bold: {
//     fontWeight: 'bold'
//   },
//   underline: {
//     textDecorationLine: 'underline'
//   },
//   bookButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginTop: 10
//   },
//   bookButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold'
//   }
// });

// export default Map;



import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import WebView from 'react-native-webview';
import BookingScreen from './BookingScreen';
import { Button } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Map = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSearchSubmit = () => {
    // Handle search submission here
    console.log('Search submitted:', searchText);
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.140246315804!2d77.51167697664603!3d23.25798250197406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e837437dc4d29%3A0x89a565bf43c61ea7!2sTrinity%20College%20of%20Engineering%20and%20Research%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1647737735961!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        }}
        style={{ flex: 1 }}
      />
      <View style={[styles.searchContainer, searchFocused && styles.searchContainerExpanded]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a location..."
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          onChangeText={handleSearchChange}
          onSubmitEditing={handleSearchSubmit}
        />
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchContainerExpanded: {
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
  },
  searchInput: {
    fontSize: 16,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Map;



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import WebView from 'react-native-webview';
// import BookingScreen from './BookingScreen';

// const Map = () => {
//   23.256949035273713, 77.51082964529186
//   const latitude = 23.256949035273713;
//   const longitude = 77.51082964529186;
  

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         source={{
//           html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.140246315804!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396e837437dc4d29%3A0x89a565bf43c61ea7!2sTrinity%20College%20of%20Engineering%20and%20Research%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1647737735961!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
//         }}
//         style={{ flex: 1 }}
//       />
//       <BookingScreen/>
//     </View>
//   );
// };


// export default Map;


