import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

export interface DefaultButtonColorProps {
  color?: string;
  size?: "large" | number | "small" | undefined;
}

const Loader: React.FC<DefaultButtonColorProps> = ({
  color = Colors.dark.primary,
  size = "large",
}) => {
  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
