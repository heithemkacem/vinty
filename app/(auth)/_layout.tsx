import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="validate-email" />
      <Stack.Screen name="forget-password" />
      <Stack.Screen name="you-are-vinty" />
    </Stack>
  );
}
