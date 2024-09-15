import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Menu(props) {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 7, backgroundColor: "#1B2456" }}>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("profile")}
          style={{
            backgroundColor: "white",
            padding: 20,
            marginTop: 70,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "600" }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("emergency")}
          style={{
            backgroundColor: "white",
            padding: 20,
            marginTop: 30,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "600" }}>
            Emergrncy Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("payment")}
          style={{
            backgroundColor: "white",
            padding: 20,
            marginTop: 30,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "600" }}>
            Payment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("about")}
          style={{
            backgroundColor: "white",
            padding: 20,
            marginTop: 30,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "600" }}>
           About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 20,
            marginTop: 30,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1B2456", fontSize: 20, fontWeight: "600" }}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



