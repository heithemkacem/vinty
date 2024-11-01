import React from "react";
import { ThemedView } from "../ThemedView";
import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
type AuthHeaderProps = {
  text: string;
  email: string;
};

const OTPHeader = ({ text, email }: AuthHeaderProps) => {
  const theme = useColorScheme();
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="bold-32">{text}</ThemedText>
      <ThemedText
        style={{ color: Colors[theme ?? "light"].gray }}
        type="regular-12"
      >
        Please enter the 6-digit code sent to your email{" "}
        <ThemedText
          style={{ color: Colors[theme ?? "light"].primary }}
          type="bold-12"
        >
          {email}{" "}
        </ThemedText>
        <ThemedText
          style={{ color: Colors[theme ?? "light"].gray }}
          type="regular-12"
        >
          for verification.
        </ThemedText>
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
    gap: 10,
  },
});
export default OTPHeader;
