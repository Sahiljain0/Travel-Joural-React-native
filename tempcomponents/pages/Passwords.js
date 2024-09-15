import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; // Importing AntDesign from expo vector icons

export default function Passwords() {
  return (
    <View style={{ flex: 1 }}>
      <View
      
      >
        
        <StatusBar style="auto" />
      </View>
      <View style={{flex: 6, alignItems: "center", backgroundColor: "#F2F2F2", paddingTop: 50}}>
        <View style={{ backgroundColor: "#F2F2F2", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>
            Enter Your Password
            </Text>
            <Text
             style={{ fontSize: 13, fontWeight: 600, color: "grey", marginTop: 8 }}
            >
             Enter Your Password  and Confirm
            </Text>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50}}>
          <AntDesign name="lock" size={30} style={{backgroundColor: "#FEFEFE", marginTop: 30, padding: 20}} /> 
          <TextInput
            placeholder="Password"
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
          <AntDesign name="lock" size={29} style={{backgroundColor: "#FEFEFE", marginTop: 30, padding: 20}} /> 
          <TextInput
            placeholder="Confirm Password"
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
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
