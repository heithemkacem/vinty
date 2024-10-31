import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "semi-bold-18"
    | "semi-bold-16"
    | "bold-12"
    | "bold-20"
    | "regular-12"
    | "bold-32"
    | "semibold-12"
    | "regular-9"
    | "semibold-9";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "black");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "semi-bold-18" ? styles.defaultSemiBold : undefined,
        type === "semi-bold-16" ? styles.defaultSemiBoldSixteen : undefined,
        type === "bold-12" ? styles.boldTwelve : undefined,
        type === "bold-20" ? styles.boldTwenty : undefined,
        type === "regular-12" ? styles.regularTwelve : undefined,
        type === "bold-32" ? styles.boldThirtyTwo : undefined,
        type === "semibold-12" ? styles.semiboldTwelve : undefined,
        type === "regular-9" ? styles.regularNine : undefined,
        type === "semibold-9" ? styles.semiboldNine : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  defaultSemiBold: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
  defaultSemiBoldSixteen: {
    fontSize: 16,
    fontFamily: "MontserratSemiBold",
  },
  boldTwelve: {
    fontSize: 12,
    fontFamily: "MontserratBold",
  },
  boldTwenty: {
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  boldThirtyTwo: {
    fontSize: 32,
    fontFamily: "MontserratBold",
  },
  regularTwelve: {
    fontSize: 12,
    fontFamily: "MontserratRegular",
  },
  semiboldTwelve: {
    fontSize: 12,
    fontFamily: "MontserratSemiBold",
  },
  regularNine: {
    fontSize: 9,
    fontFamily: "MontserratRegular",
  },
  semiboldNine: {
    fontSize: 9,
    fontFamily: "MontserratSemiBold",
  },
});
