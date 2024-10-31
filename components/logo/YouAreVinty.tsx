import React from "react";
import { ThemedView } from "../ThemedView";
import { Image, StyleSheet } from "react-native";

const YouAreVintyImage = () => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/Auth/you-are-vinty.png")}
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
  },
  image: {
    width: 179,
    height: 190,
    resizeMode: "contain",
    paddingVertical: 20,
  },
});
export default YouAreVintyImage;
