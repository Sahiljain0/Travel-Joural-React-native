import React from 'react';
import {Button, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from @expo/vector-icons
import Paymentimg from './sucess.jpg';

const Payment = (props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Text style={styles.amount}>$126</Text>
        <Text style={styles.date}>Mar 03 2023 11:29 PM</Text>
        <Text style={styles.bill}>Your bill: $126</Text>
        <View style={styles.divider}></View>
        <View style={styles.textContainer}>
          <View style={styles.indicator}></View>
          <Text>9B, near Babu Medicals, Maruthapadiyar Nagar, Madurai, Tamil Nadu 625016, India</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.indicator}></View>
          <Text>9B, near Babu Medicals, Maruthapadiyar Nagar, Madurai, Tamil Nadu 625016, India</Text>
        </View>
        <Image source={Paymentimg} style={styles.image} />
        <Text style={styles.thankYou}>Thank you</Text>
        <Text style={styles.wao}>WAO</Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <MaterialIcons key={star} name="star" style={styles.star} />
          ))}
        </View>
        <Text style={styles.feedback}>Enter your feedback</Text>
        <TouchableOpacity style={styles.submitButton} onPress={()=>props.navigation.navigate('Wallet')}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    marginTop: 20,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    marginTop: 10,
  },
  bill: {
    marginTop: 10,
  },
  divider: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
    width: '80%',
    paddingTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    backgroundColor: 'green',
  },
  thankYou: {
    marginTop: 20,
    fontSize: 20,
  },
  wao: {
    marginTop: 10,
    color: 'orange',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  star: {
    color: 'gold',
    fontSize: 37,
    marginRight: 5,
  },
  feedback: {
    marginTop: 10,
  },
  submitButton: {
    width: '95%',
   
    backgroundColor: 'blue',
    paddingVertical: 17,
    // paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal:20
   
  },
  submitText: {
    color: 'white',
    textAlign:'center'
  },
  parent: {

  }
});

export default Payment;
