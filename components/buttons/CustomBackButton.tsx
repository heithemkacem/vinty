import React from "react";
import { TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const CustomBackButton: React.FC = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        styles.button,
        {
          backgroundColor: Colors[theme ?? "dark"].white,
          borderWidth: 1,
          borderColor: Colors[theme ?? "dark"].lightGray,
        },
      ]}
    >
      <Ionicons
        name="chevron-back-outline"
        size={24}
        color={Colors[theme ?? "dark"].black}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default CustomBackButton;
