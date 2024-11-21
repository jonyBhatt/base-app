import { Link, Stack } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Day2() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Day 2",
        }}
      />
      <Text>Onboarding</Text>
      <Link href={"/day2/onboardingScreen"} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({});
