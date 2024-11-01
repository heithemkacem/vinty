import React from "react";
import { ThemedView } from "../ThemedView";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.image}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 194,
    height: 78,
    resizeMode: "contain",
    paddingVertical: 20,
  },
});
export default Logo;
