import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  useColorScheme,
} from "react-native";
import Loader from "../loader/Loader";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
export interface DefaultButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: any;
  isSubmitting?: boolean;
  color?: string;
  size?: number | "small" | "large" | undefined;
}
const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
  disabled = false,
  style,
  isSubmitting,
  size = "small",
  color = Colors.dark.primary,
}) => {
  const colorScheme = useColorScheme() ?? "dark";
  const buttonStyle: ViewStyle[] = [
    styles.button,
    disabled
      ? { backgroundColor: Colors[colorScheme ?? "dark"].lightGray }
      : { backgroundColor: color }, // Use color prop when not disabled
    style, // Custom style from props
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      {isSubmitting ? (
        <Loader size={size} />
      ) : (
        <ThemedText
          style={[{ color: Colors[colorScheme ?? "dark"].white }]}
          type="bold-16"
        >
          {title}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default DefaultButton;
