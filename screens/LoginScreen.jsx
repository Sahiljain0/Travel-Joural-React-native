import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CreateNewPasswordScreen from './CreateNewPasswordScreen';



const Stack = createStackNavigator();

const Login = ({navigation})=>{
  return (
    <View style={styles.container}>
    {/* Header */}
    <Text style={styles.headerText}>Hi, Welcome Back</Text>
    <Text style={styles.subHeaderText}>Login to continue</Text>

    {/* Email Input */}
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>

    {/* Password Input */}
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Enter your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
    </View>

    {/* Forgot Password */}
    <TouchableOpacity style={styles.forgotPassword}>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>

    {/* Continue Button */}
    <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>


    <View style={styles.socialButtonsContainer}>
<TouchableOpacity style={styles.socialButton}>
 <Ionicons name="logo-google" size={24} color="#fff" />
 <Text style={styles.socialButtonText}>Continue with Google</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.socialButton}>
 <Ionicons name="logo-facebook" size={24} color="#fff" />
 <Text style={styles.socialButtonText}>Continue with Facebook</Text>
</TouchableOpacity>

</View>
    {/* Sign Up Option */}
    <TouchableOpacity style={styles.signupOption} onPress={()=> navigation.navigate('Signup')}>
      <Text style={styles.signupOptionText}>Don't have an account? Sign Up</Text>
    </TouchableOpacity>
  </View>
  )
}
const LoginScreen = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}  >
      <Stack.Screen name="Loginpage" component={Login} />
      <Stack.Screen name="Forgot" component={CreateNewPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#555',
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#27ae60',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupOption: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupOptionText: {
    color: '#27ae60',
    fontSize: 16,
  },
  
socialButtonsContainer: {
  marginTop: 20,
},
socialButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#27ae60',
  padding: 15,
  borderRadius: 10,
  marginTop: 10,
},
socialButtonText: {
  color: '#fff',
  fontSize: 16,
  marginLeft: 10,
},
});

export default LoginScreen;
