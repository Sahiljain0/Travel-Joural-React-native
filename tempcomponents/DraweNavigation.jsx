// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Map from './Map';
// import Profile from './pages/Profile';
// import PickUp from './pages/PickUp';
// import VehicleComponent from './pages/Vehicles';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="map" component={Map} options={{headerShown:false}}/>
//       <Tab.Screen name="pickup" component={PickUp} options={{headerShown:false}}/>
//       <Tab.Screen name="vehicle" component={VehicleComponent} options={{headerShown:false}}/>
//       <Tab.Screen name="profile" component={Profile} options={{headerShown:false}}/>
//     </Tab.Navigator>
//   );
// }


// export default MyTabs;
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Map from './Map';
// import Profile from './pages/Profile';
// import PickUp from './pages/PickUp';
// import VehicleComponent from './pages/Vehicles';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="map" component={Map} options={{headerShown:false}}/>
//       <Tab.Screen name="pickup" component={PickUp} options={{headerShown:false}}/>
//       <Tab.Screen name="vehicle" component={VehicleComponent} options={{headerShown:false}}/>
//       <Tab.Screen name="profile" component={Profile} options={{headerShown:false}}/>
//     </Tab.Navigator>
//   );
// }


// export default MyTabs;



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './Map';
import Profile from './pages/Profile';
import PickUp from './pages/PickUp';
import VehicleComponent from './pages/Vehicles';
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import Menu from './pages/Menu';
import StackNavigator from './pages/stackNavigatorr';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "map") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "pickup") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "vehicle") {
              iconName = focused ? "menu" : "menu-outline";
            }
            // code for new add
            else if (route.name === "profile") {
              iconName = focused ? "duplicate" : "duplicate-outline";
            }


            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "gray",
          keyboardHidesTabBar: true
        }}
      >
         <Tab.Screen name="map" component={Map} options={{headerShown:false}}/>
      <Tab.Screen name="pickup" component={PickUp} options={{headerShown:false}}/>
      <Tab.Screen name="vehicle" component={VehicleComponent} options={{headerShown:false}}/>
      <Tab.Screen name="profile" component={StackNavigator} options={{headerShown:false}}/>  

      </Tab.Navigator>
  );
}


export default MyTabs;