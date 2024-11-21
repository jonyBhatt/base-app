import { Stack } from "expo-router";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { Eater_400Regular } from "@expo-google-fonts/eater";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    InterBold: Inter_900Black,
    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
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
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
