import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using Expo for icons

const AboutUs = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top red bar */}
      
      {/* Ambulance icon and text */}
      <View style={styles.ambulanceContainer}>
        <MaterialIcons
          name="local-hospital"
          size={28}
          color="red"
          style={styles.ambulanceIcon}
        />
        <Text style={styles.ambulanceText}>Ambulance</Text>
      </View>
      {/* Version */}
      <Text style={styles.versionText}>Version 1.0</Text>
      {/* White background box */}
      <View style={styles.contentBox}>
        {/* Who we are? */}
        <Text style={styles.titleText}>Who we are?</Text>
        {/* Content */}
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        {/* Contact information */}
        <View style={styles.contactInfo}>
          <MaterialIcons
            name="phone"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>+1234567890</Text>
        </View>
        <View style={styles.contactInfo}>
          <MaterialIcons
            name="email"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>example@example.com</Text>
        </View>
        <View style={styles.contactInfo}>
          <MaterialIcons
            name="location-on"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>123 Street, City, Country</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    width: "100%",
  },
  topBar: {
    backgroundColor: "#1B2456",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 40, // Adjust top padding to add space for status bar
  },
  backButton: {
    marginRight: 16,
    marginLeft: 8,
  },
  aboutUsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  ambulanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: 100,
  },
  ambulanceText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  versionText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
  },
  icon: {
    marginRight: 14, // Adjust the margin as needed
  },
  contentBox: {
    backgroundColor: "white",
    borderWidth: 1, // Border width
    borderColor: "floralwhite", // Border color
    borderRadius: 20,
    alignSelf: "center",
    width: "96%",
    paddingHorizontal: 15,
    paddingVertical: 60,
    marginTop: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    marginBottom: 20,
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
  },
});

export default AboutUs;
