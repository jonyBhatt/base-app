import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { Eater_400Regular } from "@expo-google-fonts/eater";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DayList from "./src/component/core/DayList";

export default function App() {
  const [loaded, error] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Eater: Eater_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Advant Calender</Text>
      <DayList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    fontFamily: "Inter_900Black",
  },
});
