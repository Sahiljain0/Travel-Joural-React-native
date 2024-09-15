import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function EmergencyContact() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2.7, backgroundColor: "white" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1B2456",
            padding: 20,
            marginTop: 680,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Add Contacts
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
