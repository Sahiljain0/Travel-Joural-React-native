
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MyRights = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <MaterialIcons name="arrow-back" size={28} color="white" style={styles.backButton} />
        <Text style={styles.title}>My Rights</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Text style={styles.rightsHeading}>Rights of Vehicle Drivers</Text>
          <View style={styles.rights}>
            <Text style={styles.rightsPoints}>- Right to drive safely</Text>
            <Text style={styles.rightsPoints}>- Right to fair treatment from other drivers</Text>
            <Text style={styles.rightsPoints}>- Right to obey traffic laws</Text>
            <Text style={styles.rightsPoints}>- Right to proper road infrastructure</Text>
            <Text style={styles.rightsPoints}>- Right to reasonable parking</Text>
          </View>
          {/* Additional content boxes */}
          {[...Array(10)].map((_, index) => (
            <View key={index} style={styles.contentBox}>
              <Text style={styles.rightsHeading}>Rule {index + 1} -</Text>
              <View style={styles.rights}>
                <Text style={styles.rightsPoints}>- Lorem ipsum dolor sit amet</Text>
                <Text style={styles.rightsPoints}>- Consectetur adipiscing elit</Text>
                <Text style={styles.rightsPoints}>- Sed do eiusmod tempor incididunt</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    width: '100%',
  },
  topBar: {
    backgroundColor: '#1B2456',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    marginRight: 16,
    marginLeft: 8,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  scrollView: {
    flex: 1,
    marginTop: 85, // Adjust based on the height of the top bar
  },
  contentContainer: {
    paddingTop: 20, // Adjust padding top to align with other boxes
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // Set background color to transparent
  },
  contentBox: {
    backgroundColor: 'transparent', // Set background color to transparent
    borderWidth: 2,
    borderColor: 'gainsboro ',
    borderRadius: 20,
    marginTop: 20,
    padding:20,
    paddingVertical: 20,
  },
  rightsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "red",
  },
  rights: {
    paddingVertical: 10,
  },
  rightsPoints: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MyRights;
