import { FlatList, StyleSheet, Text, View } from "react-native";
export default function DayList() {
  const days = [...Array(24)].map((_, index) => index + 1);

  return (
    <View>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        numColumns={2}
        columnWrapperStyle={{
          gap: 10,
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.box}>
              <Text style={styles.item}>Day {item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    gap: 10,
    padding: 10,
  },
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  item: {
    textAlign: "center",
    fontFamily: " Inter_400Regular",
    fontWeight: "400",
  },
});
