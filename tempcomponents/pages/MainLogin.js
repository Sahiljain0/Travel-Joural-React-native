import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import DriverLogo from "./4403853.png";
import UserLogo from "./3930447.png"

export default function MainLogin(props) {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 1, backgroundColor: "#1B2456", justifyContent: "center", alignItems: "center" }}>
      <Image
          source={DriverLogo}
          style={{ width: 260, height: 260, marginVertical: 20 }}
        />
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('Phoneno')}
          style={{
            backgroundColor: "white",
            width: "60%",
            paddingVertical: 15,
            marginTop: 10,
            borderRadius: 5,
            alignItems: "center",
            marginBottom:20,
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "700" }}>
            Driver Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('Phoneno')}
          style={{
            backgroundColor: "white",
            width: "60%",
            paddingVertical: 15,
            marginTop: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "700" }}>
            Custumer Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
