import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const VehicleComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="white"
          style={styles.backButton}
        />
        <Text style={styles.title}>Select Vehicle Category</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Ambulance Icon */}
        <View style={styles.ambulanceContainer}>
          <MaterialIcons name="local-hospital" size={100} color="red" />
        </View>
        <View style={styles.cardsContainer}>
          {/* Card 1 */}
          <View style={styles.card}>
            <MaterialIcons
              name="local-hospital"
              size={48}
              color="red"
              style={styles.vehicleIcon}
            />
            <Text style={styles.vehicleText}>Ambulance</Text>
            <MaterialIcons
              name="arrow-forward"
              size={28}
              color="black"
              style={styles.arrowIcon}
            />
          </View>
          {/* Card 2 */}
          <View style={styles.card}>
            <MaterialIcons
              name="local-hospital"
              size={48}
              color="blue"
              style={styles.vehicleIcon}
            />
            <Text style={styles.vehicleText}>Emergency Medical Service</Text>
            <MaterialIcons
              name="arrow-forward"
              size={28}
              color="black"
              style={styles.arrowIcon}
            />
          </View>
          {/* Card 3 */}
          <View style={styles.card}>
            <MaterialIcons
              name="local-hospital"
              size={48}
              color="green"
              style={styles.vehicleIcon}
            />
            <Text style={styles.vehicleText}>Mobile Clinic</Text>
            <MaterialIcons
              name="arrow-forward"
              size={28}
              color="black"
              style={styles.arrowIcon}
            />
          </View>
          {/* Card 4 */}
          <View style={styles.card}>
            <MaterialIcons
              name="local-hospital"
              size={48}
              color="orange"
              style={styles.vehicleIcon}
            />
            <Text style={styles.vehicleText}>Paramedic Motorcycle</Text>
            <MaterialIcons
              name="arrow-forward"
              size={28}
              color="black"
              style={styles.arrowIcon}
            />
          </View>
          {/* Card 5 */}
          <View style={styles.card}>
            <MaterialIcons
              name="local-hospital"
              size={48}
              color="purple"
              style={styles.vehicleIcon}
            />
            <Text style={styles.vehicleText}>Emergency Helicopter</Text>
            <MaterialIcons
              name="arrow-forward"
              size={28}
              color="black"
              style={styles.arrowIcon}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topBar: {
    backgroundColor: "#1B2456",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 60,
    marginBottom: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  backButton: {
    marginRight: 16,
    marginLeft: 8,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  ambulanceContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 150,
  },
  cardsContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 40, // Adjusted to accommodate the fixed top bar
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "whitesmoke",
    borderWidth: 1,
    borderRadius: 20,
  },
  vehicleIcon: {
    marginRight: 10,
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default VehicleComponent;
