import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";
import PhoneNumber from "../PhoneNumber";
import FirstLastName from "../First_LastName";
import EnterMail from "../EnterMail";
import Passwords from "../Passwords";

const EntryNavigation = () => {
    
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Phoneno' component={PhoneNumber}  options={{headerShown:false}} />
      <Stack.Screen name='FirstLast' component={FirstLastName}/>
      <Stack.Screen name='Mail' component={EnterMail}/>
      <Stack.Screen name='Password' component={Passwords}/>
    
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default EntryNavigation

