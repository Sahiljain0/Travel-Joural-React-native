import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SelectLanguageScreen from './SelectLanguageScreen';
import EnterOtpScreen from './EnterOtpScreen';
import ChooseVacationScreen from './ChooseVacationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
const Stack = createStackNavigator();


const SignUp = ({ navigation })=>{
  return(
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Complete Your Account</Text>
      <Text style={styles.subHeaderText}>Create your account to get started</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={()=>navigation.navigate('Otp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Option */}
      <TouchableOpacity style={styles.loginOption} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.loginOptionText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>

  )
}
const SignUpScreen = () => {
  return (
  <Stack.Navigator >
    <Stack.Screen name="Signup" component={SignUp} />
    <Stack.Screen name="Otp" component={EnterOtpScreen} />
    <Stack.Screen name="Selectlanguage" component={SelectLanguageScreen} />
    <Stack.Screen name="choose" component={ChooseVacationScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    
    {/* <Stack.Screen name="Welcome" component={AppEntryScreen} /> */}
    
  </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#27ae60', // Green background
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    // color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    // color: '#ddd',
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    // color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    // backgroundColor: '#27ae60', // White background for input
    marginBottom: 10,
    // color: '#333', // Text color
  },
  signupButton: {
    backgroundColor: '#27ae60', 
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color:'white' ,// Green text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginOption: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginOptionText: {
    color: '#27ae60',
    fontSize: 16,
  },
});

export default SignUpScreen;






