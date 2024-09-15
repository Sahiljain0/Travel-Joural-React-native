// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Add logic to handle sending a reset password link to the entered email
    console.log('Continue button pressed with email:', email);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Forgot Password</Text>

      {/* Content */}
      <Text style={styles.content}>
        Please enter your email address. We will send you a reset password link.
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.emailInput}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#3498db',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  emailInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#00aa00', // Set the desired button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  continueButtonText: {
    color: '#ffffff', // Set the desired text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
