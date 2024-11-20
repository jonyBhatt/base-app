import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Day2() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Day 2",
        }}
      />
      <Text>Onboarding</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
