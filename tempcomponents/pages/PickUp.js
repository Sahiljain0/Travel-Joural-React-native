import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PickUp() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, backgroundColor: "#1B2456", alignItems: "center" }}
      >
        <Text style={{ color: "white", marginTop: 70, fontSize: 25 }}>
          Hi, New Booing Arrived
        </Text>
      </View>
      <View
        style={{
          flex: 6,
          backgroundColor: "#ffff",
          alignItems: "center",
          paddingTop:60,
        }}
      >
        <Text style={{ fontSize: 20, color: "red", fontWeight: 600 }}>
          Pickup Location
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: "85%",
            marginTop: 10,
            fontSize: 18,
          }}
        >
          9B, near Babu Medicals,Maruthapadiyar Nagar, Madurai, Tamil Nadu,
          625016, India
        </Text>
        <Image
          style={{
            width: 200,
            height: 200,
            borderWidth: 10,
            borderColor: "green",
            borderRadius: 500,
            marginTop: 70,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#1B2456",
            padding: 20,
            width: "85%",
            marginTop: 190,
            marginRight: 15,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
