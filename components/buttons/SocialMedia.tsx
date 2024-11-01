import { Colors } from "@/constants/Colors";
import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet, useColorScheme, ViewStyle } from "react-native";
interface SocialMediaButtonProps {
  onPress: () => void;
}

const SocialMediaButton: React.FC<
  PropsWithChildren & SocialMediaButtonProps
> = ({ onPress, children }) => {
  const theme = useColorScheme();
  const buttonStyle: ViewStyle[] = [
    styles.button,
    {
      backgroundColor: Colors[theme ?? "dark"].lightPrimary,
      borderWidth: 1,
      borderColor: Colors[theme ?? "dark"].primary,
    },
  ];

  return children ? (
    <Pressable onPress={onPress} style={buttonStyle}>
      {children}
    </Pressable>
  ) : null;
};

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    borderRadius: 27, // rounded-full equivalent in React Native
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SocialMediaButton;
