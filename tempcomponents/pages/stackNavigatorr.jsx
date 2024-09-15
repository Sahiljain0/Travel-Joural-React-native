


import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import EmergencyContact from './EmergencyContact';
import Profile from './Profile';
import Payment from './Payment';
import AboutUs from './About';

const Stack = createStackNavigator();



const StackNavigator = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen name="menu" component={Menu}/>

    <Stack.Screen name="profile" component={Profile}/>
    <Stack.Screen name="emergency" component={EmergencyContact}/>
    <Stack.Screen name="payment" component={Payment}/>
    <Stack.Screen name="about" component={AboutUs} />
    {/* <Stack.Screen name="menu" component={Menu}/> */}

  </Stack.Navigator>
)};

export default StackNavigator;

