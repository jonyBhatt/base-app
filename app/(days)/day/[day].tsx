import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Day() {
  const { day } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: `Day ${day}`,
        }}
      />
      <Text>{day}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
