import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput placeholder="Course Goal" />
        <Button title="ADD" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}
