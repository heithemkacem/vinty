// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Feather from "@expo/vector-icons/Feather";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function FeatherIcons({
  style,
  size = 23,
  ...rest
}: IconProps<ComponentProps<typeof Feather>["name"]>) {
  return <Feather size={size} style={style} {...rest} />;
}
