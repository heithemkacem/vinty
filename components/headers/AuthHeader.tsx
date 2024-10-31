import React from "react";
import { ThemedView } from "../ThemedView";
import { Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
type AuthHeaderProps = {
  text: string;
  subtitle: string;
};

const AuthHeader = ({ text, subtitle }: AuthHeaderProps) => {
  const theme = useColorScheme();
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="bold-32">{text}</ThemedText>
      <ThemedText
        style={{ color: Colors[theme ?? "light"].gray }}
        type="regular-12"
      >
        {subtitle}
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
    gap: 10,
  },
});
export default AuthHeader;
