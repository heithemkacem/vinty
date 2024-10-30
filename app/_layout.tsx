import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SessionProvider } from "@/context/ctx";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainContainerForApp from "@/components/containers/MainContainerForApp";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SessionProvider>
        <SafeAreaProvider>
          <MainContainerForApp>
            <Slot />
          </MainContainerForApp>
        </SafeAreaProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
