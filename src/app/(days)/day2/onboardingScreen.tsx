import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
export default function OnboardingScreen() {
  const [onBoardIndex, setOnBoardIndex] = useState(0);
  const onBoardData = [
    {
      title: "Engage with interactive content",
      iconName: "book-reader",
    },
    {
      title: "Find global learning groups",
      iconName: "globe",
    },
    {
      title: "Learn at your pace",
      iconName: "file-alt",
    },
    {
      title: "Collaborate with peers",
      iconName: "business-time",
    },
  ];

  const data = onBoardData[onBoardIndex];
  const lastItem = onBoardIndex === onBoardData.length - 1;

  const onContinue = () => {
    if (lastItem) {
      setOnBoardIndex(0);
      router.back();
    }
    setOnBoardIndex(onBoardIndex + 1);
  };
  return (
    <View style={styles.onboardingWrapper}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.headingWrapper}>
        <Text style={styles.topHeading}>StudySnap</Text>
        <Text style={styles.heading}>{data.title}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <FontAwesome5 name={data.iconName} size={280} color="#07f08e" />
      </View>

      <View style={styles.buttonWrapper}>
        <Pressable>
          <Text style={styles.slides}>Skip</Text>
        </Pressable>
        <Pressable style={styles.nextButton} onPress={onContinue}>
          <Text style={styles.buttontext}>Next</Text>
          <AntDesign name="rightcircle" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  onboardingWrapper: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  headingWrapper: {
    marginVertical: 50,
  },
  heading: {
    fontSize: 55,
    fontWeight: "bold",
    color: "white",
    fontFamily: "InterBold",
  },
  topHeading: {
    fontSize: 30,
    fontWeight: "500",
    color: "white",
    fontFamily: "InterMedium",
    marginBottom: 15,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  slides: {
    color: "white",
  },
  nextButton: {
    backgroundColor: "#FFCF2D",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttontext: {
    // color: "white",
    fontFamily: "InterMedium",
    fontWeight: "600",
  },
});
