import React from "react";
import { View, TextInput, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { MaterialIcon } from "../icons/MaterialIcons";

interface OTPInputProps {
  onOtpChange?: (otp: string) => void; // Make it optional with `?`
  editable: boolean;
  otpValue: string; // New prop to track the OTP value
  error: string | false | undefined;
}

const OTPInput: React.FC<OTPInputProps> = ({
  onOtpChange,
  editable,
  otpValue,
  error,
}) => {
  const colorScheme = useColorScheme();

  const handleOtpChange = (index: number, value: string) => {
    if (onOtpChange) {
      const newOtpValue = otpValue.split(""); // Split current OTP value
      newOtpValue[index] = value; // Update the OTP at the specific index
      onOtpChange(newOtpValue.join("")); // Join back to string and update formik value
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <TextInput
            key={index}
            style={[
              styles.otpInput,
              {
                backgroundColor: Colors[colorScheme ?? "light"].otpBg,
                color: Colors[colorScheme ?? "light"].black,
              },
            ]}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(value) => handleOtpChange(index, value)}
            value={otpValue[index] || ""} // Control input with current OTP value
            editable={editable}
          />
        ))}
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default OTPInput;
