import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
export default function DayList() {
  const days = [...Array(24)].map((val, index) => index + 1);
  // console.log(`day${days}`);
  return (
    <View
      style={{
        paddingBottom: 20,
        flex: 1,
      }}
    >
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        numColumns={2}
        columnWrapperStyle={{
          gap: 10,
        }}
        renderItem={({ item }) => {
          return (
            <Link href={`/day${item}`} asChild>
              <Pressable style={styles.box}>
                <Text style={styles.item}>Day {item}</Text>
              </Pressable>
            </Link>
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
    fontFamily: "Eater",
    fontWeight: "400",
    fontSize: 25,
  },
});
