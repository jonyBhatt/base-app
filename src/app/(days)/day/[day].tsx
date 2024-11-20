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
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    fontFamily: "Eater",
    textAlign:"center"
  },
});
