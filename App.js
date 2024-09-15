// // App.js
// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import WelcomeScreen from './screens/WelcomeScreen';
// import WelcomeScreen2 from './screens/WelcomeScreen2';
// import WelcomeScreen3 from './screens/WelcomeScreen3';

// import AppEntryScreen from './screens/AppEntryScreen';

// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';

// // import SettingsScreen from './screens/SettingsScreen'; // You can create a Settings screen

// // const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();



// const App = () => {



//   return(
//   <NavigationContainer>
//   <Stack.Navigator screenOptions={{
//     headerShown: false
//   }} >
//     <Stack.Screen name="Welcome" component={AppEntryScreen} />
//     <Stack.Screen name="Welcome1" component={WelcomeScreen} />
//     <Stack.Screen name="Welcome2" component={WelcomeScreen2} />
//     <Stack.Screen name="Welcome3" component={WelcomeScreen3} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Signup" component={SignUpScreen} />
//   </Stack.Navigator>
//   </NavigationContainer>
// )};

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator screenOptions={{
// //     headerShown: false
// //   }} >
// //         <Tab.Screen name="Home" component={HomeStack} />
// //         <Tab.Screen name="Map" component={MapScreen} />
// //         <Tab.Screen name="CreateEntry" component={CreateEntryScreen} />
// //         <Tab.Screen name="ImageReel" component={ImageReelScreen} />
// //         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// export default App;


import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterMail from './tempcomponents/EnterMail';
import FirstLastName from './tempcomponents/First_LastName';
import Passwords from './tempcomponents/Passwords';
import PhoneNumber from './tempcomponents/PhoneNumber';
import Map from './tempcomponents/Map';
import DraweNavigation from './tempcomponents/DraweNavigation';
import MyTabs from './tempcomponents/DraweNavigation';
import MainLogin from './tempcomponents/pages/MainLogin';

const Stack = createStackNavigator();

const App = () => {
  return(
  <NavigationContainer>
  <Stack.Navigator 
  >
    <Stack.Screen name="diver" component={MainLogin} options={{headerShown:false}}/>
    <Stack.Screen name="Phoneno" component={PhoneNumber} />
    <Stack.Screen name="FirstLast" component={FirstLastName} />
    <Stack.Screen name="Mail" component={EnterMail} />
    <Stack.Screen name="Password" component={Passwords} />
    <Stack.Screen name="drawer" component={MyTabs} options={{headerShown:false}}/>
  </Stack.Navigator>
  </NavigationContainer>
)};

export default App;

