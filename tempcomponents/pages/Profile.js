import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";


export default function () {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 8, alignItems: "center", backgroundColor: "#F2F2F2", paddingTop: 30 }}>
        <Image style={{width: 150, height: 150, borderWidth: 2, borderColor: "#1B2456", borderRadius: 500, top: 20,}}/>
        <Text style={{fontSize: 20, fontWeight: 600, marginTop: 40}} >Say A Little Your Self</Text>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50, marginTop: 30}}>
          {/* <Ionicons name="person" size={25} style={{backgroundColor: "#FEFEFE", padding: 20}} /> */}
          <TextInput
            placeholder="Full Name"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              fontSize: 18,
              
            }}
          />
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50, marginTop: 20}}>
          {/* <Ionicons name="mail" size={25} style={{backgroundColor: "#FEFEFE", padding: 20}} /> */}
          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              fontSize: 18,
              
            }}
          />
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 50, marginRight: 50, marginTop: 20}}>
          {/* <FontAwesome6 name="phone" size={25} style={{backgroundColor: "#FEFEFE", padding: 20}} /> */}
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderColor: "#FAF9F5",
              backgroundColor: "#FAF9F5",
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderRadius: 1,
              width: "80%",
              fontSize: 18,
              
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#1B2456",
            width: "80%",
            paddingVertical: 15,
            marginTop: 100,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Add
          </Text>
        </TouchableOpacity>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}



