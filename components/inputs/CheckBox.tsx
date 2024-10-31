import React from "react";
import { Pressable, View, StyleSheet, useColorScheme } from "react-native";
import { IoniconsIcon } from "../icons/Ionicon";
import { Colors } from "@/constants/Colors";
interface CheckBoxtProps {
  checked: boolean | undefined;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  onPress?: () => void;
}

const CheckBox: React.FC<CheckBoxtProps> = ({
  checked,
  setChecked,
  onPress,
}) => {
  const colorScheme = useColorScheme() ?? "dark";
  const handleCheck = () => {
    setChecked?.(!checked);
  };

  return (
    <Pressable onPress={onPress ? onPress : handleCheck}>
      <View
        style={[
          styles.checkBox,
          checked
            ? { backgroundColor: Colors[colorScheme ?? "dark"].primary }
            : {
                backgroundColor: Colors[colorScheme ?? "dark"].white,
                borderWidth: 2,
                borderColor: Colors[colorScheme ?? "dark"].darkGray,
              },
        ]}
      >
        {checked && <IoniconsIcon name="checkmark-sharp" size={9} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  checked: {
    // Replace this with your primary color
  },
  unchecked: {},
});

export default CheckBox;
