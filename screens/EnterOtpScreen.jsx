// // OTPScreen.js
// import React, { useState, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const EnterOtpScreen = () => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const inputRefs = useRef([]);

//   const handleResendCode = () => {
//     // Add logic to resend the OTP code
//     Alert.alert('Resend Code', 'OTP Code has been resent.');
//   };

//   const handleVerifyOTP = () => {
//     // Add logic to verify the OTP entered by the user
//     const enteredOTP = otp.join('');
    
//     if (enteredOTP === '1234') {
//       Alert.alert('Success', 'OTP Verified Successfully!');
//     } else {
//       Alert.alert('Error', 'Invalid OTP. Please try again.');
//     }
//   };

//   const handleChangeText = (index, value) => {
//     const updatedOtp = [...otp];
//     updatedOtp[index] = value;

//     setOtp(updatedOtp);

//     // Move focus to the next input block if the current one is filled
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>

//       {/* OTP Input Blocks */}
//       <View style={styles.otpContainer}>
//         {otp.map((value, index) => (
//           <TextInput
//             key={index}
//             style={styles.otpInput}
//             keyboardType="numeric"
//             maxLength={1}
//             value={value}
//             onChangeText={(text) => handleChangeText(index, text)}
//             ref={(input) => (inputRefs.current[index] = input)}
//           />
//         ))}
//       </View>

//       {/* Resend Code */}
//       <TouchableOpacity onPress={handleResendCode}>
//         <Text style={styles.resendText}>Didn't receive OTP? Resend code</Text>
//       </TouchableOpacity>

//       {/* Verify OTP Button */}
//       <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
//         <Text style={styles.verifyButtonText}>Verify OTP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   otpInput: {
//     fontSize: 24,
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 10,
//     padding: 10,
//     textAlign: 'center',
//     width: 50,
//     marginRight: 10,
//   },
//   resendText: {
//     color: '#3498db',
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   verifyButton: {
//     backgroundColor: '#00aa00', // Set the desired button color
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//   },
//   verifyButtonText: {
//     color: '#ffffff', // Set the desired text color
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default EnterOtpScreen;
// OTPScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const EnterOtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleResendCode = () => {
    // Add logic to resend the OTP code
    Alert.alert('Resend Code', 'OTP Code has been resent.');
  };

  const handleVerifyOTP = () => {
    // Add logic to verify the OTP entered by the user
    const enteredOTP = otp.join('');
    
    if (enteredOTP === '1234') {
      Alert.alert('Success', 'OTP Verified Successfully!');
      navigation.navigate('Selectlanguage')
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleChangeText = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // Move focus to the next input block if the current one is filled
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      const updatedOtp = [...otp];
      updatedOtp[index] = '';
      inputRefs.current[index - 1].focus();
      setOtp(updatedOtp);
    }
  };

  const isOtpFilled = () => {
    return otp.every((value) => value !== '');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      {/* OTP Input Blocks */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChangeText(index, text)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            ref={(input) => (inputRefs.current[index] = input)}
          />
        ))}
      </View>

      {/* Resend Code */}
      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Didn't receive OTP? Resend code</Text>
      </TouchableOpacity>

      {/* Verify OTP Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP} disabled={!isOtpFilled()}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    width: 50,
    marginRight: 10,
  },
  resendText: {
    color: '#3498db',
    fontSize: 16,
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: '#00aa00', // Set the desired button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    opacity: 0.8, // Reduce opacity when disabled
  },
  verifyButtonText: {
    color: '#ffffff', // Set the desired text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EnterOtpScreen;

