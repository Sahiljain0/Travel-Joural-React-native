import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function EmergencyContact2() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#1B2456",
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            style={{
              fontSize: 30,
              color: "white",
              marginTop: 60,
              marginLeft: 40,
            }}
          />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <View style={{flex: 6, alignItems: "center", backgroundColor: "#F2F2F2", paddingTop: 50}}>
        <View style={{ backgroundColor: "#F2F2F2", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>
             Add Emergency Contact
            </Text>
            <Text
             style={{ fontSize: 13, fontWeight: 600, color: "grey", marginTop: 8 }}
            >
             Add Emergency Contact Name & Number
            </Text>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50}}>
          <MaterialIcons name="contact-phone" size={30} style={{backgroundColor: "#FEFEFE", marginTop: 30, padding: 20}} />
          <TextInput
            placeholder="Contact Number"
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              marginTop: 30,
              fontSize: 18,
              
            }}
          />
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 53, marginRight: 50}}>
          <FontAwesome5 name="id-card-alt" size={29} style={{backgroundColor: "#FEFEFE", marginTop: 30, padding: 20}} />
          <TextInput
            placeholder="Contact Number"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              marginTop: 30,
              fontSize: 18,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1B2456",
            width: "80%",
            paddingVertical: 15,
            marginTop: 50,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
