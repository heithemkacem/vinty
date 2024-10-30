import { Colors } from "@/constants/Colors";
import React, { PropsWithChildren } from "react";
import { useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
interface MainContainerForAppProps {
  children: React.ReactNode;
}

const MainContainerForApp = ({ children }: MainContainerForAppProps) => {
  const theme = useColorScheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors[theme ?? "light"].background,
      }}
    >
      <ThemedView style={{ flex: 1 }}>{children}</ThemedView>
    </SafeAreaView>
  );
};

export default MainContainerForApp;
