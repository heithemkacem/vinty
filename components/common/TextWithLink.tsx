import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Href, Link } from "expo-router";
import { Colors } from "@/constants/Colors";
type TextWithLinkProp = {
  link: string;
  text: string;
  href: Href<string | object>;
};
const TextWithLink = ({ text, link, href }: TextWithLinkProp) => {
  const theme = useColorScheme();
  return (
    <ThemedView style={styles.signupContainer}>
      <ThemedText
        style={{ color: Colors[theme ?? "light"].darkGray }}
        type="regular-12"
      >
        {text}
      </ThemedText>
      <Link href={href} asChild>
        <Pressable>
          <ThemedText
            style={{ marginLeft: 5, color: Colors[theme ?? "light"].primary }}
            type="bold-12"
          >
            {link}
          </ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  );
};

export default TextWithLink;
const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    flexWrap: "wrap",
  },
});
