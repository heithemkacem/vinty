import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  Pressable,
  Platform,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { MaterialIcon } from "../icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "../ThemedView";
import { FeatherIcons } from "../icons/FeatherIcons";

interface TextInputProps {
  error?: any;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  editable?: boolean;
  isPassword?: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  isPassword,
  error,
  value,
  placeholder,
  onChangeText,
  editable = true,
}) => {
  const colorScheme = useColorScheme();
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const theme = useColorScheme();
  const handleFocus = () => {
    setIsFocused(true);
    setIsTouched(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(false);
  };

  const inputBorderColor = () => {
    if (error) {
      return [
        styles.borderError,
        {
          borderColor: Colors[colorScheme ?? "dark"].error,
        },
      ];
    }
    if (isFocused || (isTouched && !error)) {
      return [
        styles.borderFocused,
        {
          borderColor: Colors[colorScheme ?? "dark"].primary,
        },
      ];
    }
    return [
      styles.borderDefault,
      {
        backgroundColor: Colors[colorScheme ?? "dark"].white,
        borderColor: Colors[colorScheme ?? "dark"].lightGray,
        borderWidth: 1,
      },
    ];
  };

  return (
    <ThemedView style={styles.container}>
      <RNTextInput
        style={[
          styles.textInput,
          {
            backgroundColor: Colors[colorScheme ?? "dark"].white,
            color: Colors[colorScheme ?? "dark"].black,
            fontFamily: "Montserrat",
          },
          inputBorderColor(),
          styles.shadow, // Add shadow styles here
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors[colorScheme ?? "dark"].lightGray}
        secureTextEntry={isPassword && hidePassword}
        value={value}
        onChangeText={(text) => {
          onChangeText && onChangeText(text);
          setIsTouched(true);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
      />
      {error && (
        <ThemedView style={[styles.errorContainer, { marginTop: 10 }]}>
          <ThemedText
            type="bold-12"
            style={[{ color: Colors[colorScheme ?? "dark"].error }]}
          >
            {error}
          </ThemedText>
          <MaterialIcon
            name="error"
            size={13}
            color={Colors[colorScheme ?? "dark"].error}
          />
        </ThemedView>
      )}
      {isPassword && (
        <Pressable
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.passwordToggle}
        >
          {hidePassword ? (
            <FeatherIcons
              name="eye-off"
              size={16}
              color={Colors[theme ?? "light"].lightGray}
            />
          ) : (
            <FeatherIcons
              name="eye"
              size={16}
              color={Colors[theme ?? "light"].lightGray}
            />
          )}
        </Pressable>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  textInput: {
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 12,
    height: 50,
  },
  borderDefault: {
    borderWidth: 1,
  },
  borderFocused: {
    borderWidth: 2,
  },
  borderError: {
    borderWidth: 2,
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passwordToggle: {
    position: "absolute",
    top: 7,
    right: 16,
    zIndex: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#CFCECE",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        shadowRadius: 10,
      },
    }),
  },
});

export default TextInput;
