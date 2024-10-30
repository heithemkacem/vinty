import React from "react";
import { StyleSheet, Platform } from "react-native";
import { ThemedView } from "../ThemedView";
import { PropsWithChildren } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function MainContainer({ children }: PropsWithChildren) {
  const bgColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "background"
  );

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === "ios" ? 40 : 20} // More space for iOS to avoid overlap
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
      enableAutomaticScroll={Platform.OS === "ios"} // Ensures smooth auto-scroll on iOS
      enableResetScrollToCoords={false} // Prevents jumpy behavior on iOS
    >
      <ThemedView style={[styles.container, { backgroundColor: bgColor }]}>
        {children}
      </ThemedView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    padding: 20,
  },
});
