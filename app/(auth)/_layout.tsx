import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="verify-email" />
      <Stack.Screen name="forget-password" />
      <Stack.Screen name="reset-password-otp" />
      <Stack.Screen name="reset-password" />
      <Stack.Screen name="password-changed-success" />
      <Stack.Screen name="you-are-vinty" />
    </Stack>
  );
}
