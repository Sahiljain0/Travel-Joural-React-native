// CreateNewPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install the 'expo-vector-icons' package

const CreateNewPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleResetPassword = () => {
    // Add logic to handle resetting the password
    if (newPassword === confirmPassword) {
      console.log('Password reset successful!');
      // Navigate to the login or home screen after successful password reset
      // navigation.navigate('Login'); // Uncomment this line and replace 'Login' with the screen you want to navigate to
    } else {
      console.log('Passwords do not match. Please try again.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Create New Password</Text>

      {/* New Password Input */}
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="New Password"
          secureTextEntry={!showPassword}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.iconContainer}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>
    <View style={styles.passwordInputContainer} >
      <TextInput
        style={styles.passwordInput}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
       <TouchableOpacity onPress={toggleShowPassword} style={styles.iconContainer2}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>
      {/* Confirm Password Input */}
      

      {/* Reset Password Button */}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
  },
  iconContainer2: {
    opacity:0,
    position: 'absolute',
    right: 15,
  },
  resetButton: {
    backgroundColor: '#00aa00', // Set the desired button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#ffffff', // Set the desired text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateNewPasswordScreen;
