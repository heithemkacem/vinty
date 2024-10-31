import React, { useCallback, useState } from "react";
import { ThemedView } from "../ThemedView";
import CheckBox from "../inputs/CheckBox";
import { ThemedText } from "../ThemedText";
import { Href, Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
type CheckBoxWithLinkProp = {
  link?: string;
  text: string;
  href?: Href<string | object>;
};
const CheckBoxWithLink = ({ link, text, href }: CheckBoxWithLinkProp) => {
  const [checked, setChecked] = useState<boolean>(false);
  const theme = useColorScheme();
  const handleCheckbox = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <ThemedView style={styles.row}>
      <ThemedView style={styles.checkboxContainer}>
        <CheckBox checked={checked} setChecked={handleCheckbox} />
        <Pressable>
          <ThemedText
            style={[
              styles.rememberMeText,
              { color: Colors[theme ?? "light"].darkGray },
            ]}
            type="regular-12"
          >
            {text}
          </ThemedText>
        </Pressable>
      </ThemedView>
      {link && href && (
        <Link href={href} asChild>
          <Pressable>
            <ThemedText
              style={{ color: Colors[theme ?? "light"].primary }}
              type="semibold-12"
            >
              {link}
            </ThemedText>
          </Pressable>
        </Link>
      )}
    </ThemedView>
  );
};

export default CheckBoxWithLink;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    marginLeft: 8,
  },
});
