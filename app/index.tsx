import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DayList from "../src/component/core/DayList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Advant Calender</Text>
      <DayList />
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
