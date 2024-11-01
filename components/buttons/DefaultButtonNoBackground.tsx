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
const DefaultButtonNoBackground: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
  style,
  isSubmitting,
  size = "small",
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const buttonStyle: ViewStyle[] = [
    styles.button,

    style, // Custom style from props
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {isSubmitting ? (
        <Loader size={size} />
      ) : (
        <ThemedText
          style={[{ color: Colors[colorScheme ?? "light"].black }]}
          type="semi-bold-16"
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
    borderWidth: 1,
    borderColor: Colors.light.black,
    marginVertical: 10,
  },
});

export default DefaultButtonNoBackground;
