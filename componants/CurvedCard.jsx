// CurvedCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CurvedCard = ({ onPress }) => {
  return (
    <View style={styles.cardContainer} >
      <Text style={styles.cardHeading}>Your Card Heading</Text>
      <Text style={styles.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <View style={styles.actionContainer}>
        
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
    </View>
        <View >
        <TouchableOpacity style={styles.letsGoButton} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
        </View>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 50,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    // marginHorizontal: 20,
    position:'absolute',
    bottom:0,
    // marginBottom: 30,
    elevation: 5,
   
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
  },
  cardContent: {
    fontSize: 16,
    marginBottom: 20,
    textAlign:'center',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    justifyContent:'center'
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: '#aaa',
    borderRadius: 5,
    marginRight: 10,
    
  },
  letsGoButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical:30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default CurvedCard;
