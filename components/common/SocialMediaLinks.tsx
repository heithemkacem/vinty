import React from "react";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";
import { Platform, StyleSheet, useColorScheme } from "react-native";
import SocialMediaButton from "../buttons/SocialMedia";
import { IoniconsIcon } from "../icons/Ionicon";

const SocialMediaLinks = () => {
  const colorScheme = useColorScheme() ?? "dark";
  return (
    <ThemedView style={styles.socialMediaContainer}>
      <SocialMediaButton
        onPress={() => false}
        children={
          <IoniconsIcon
            name="logo-google"
            color={Colors[colorScheme ?? "dark"].error}
            size={24}
          />
        }
      />

      {Platform.OS === "ios" && (
        <SocialMediaButton
          onPress={() => false}
          children={
            <IoniconsIcon
              name="logo-apple"
              color={Colors[colorScheme ?? "dark"].black}
              size={24}
            />
          }
        />
      )}
    </ThemedView>
  );
};

export default SocialMediaLinks;

const styles = StyleSheet.create({
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
});
