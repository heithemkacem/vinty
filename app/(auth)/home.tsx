import React, { useState } from "react";
import { View, StyleSheet, Image, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import DefaultButton from "@/components/butttons/Default";
import DefaultButtonNoBackground from "@/components/butttons/DefaultButtonNoBackground";
import { LinearGradient } from "expo-linear-gradient"; // For gradient background
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Bottomsheet from "@/components/bottom-sheet/BottomSheet";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const theme = useColorScheme();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false); // State for bottom sheet visibility
  const router = useRouter();
  return (
    <GestureHandlerRootView>
      <LinearGradient
        colors={[
          Colors[theme ?? "light"].white,
          Colors[theme ?? "light"].primary,
        ]}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.buttonContainer}>
          <DefaultButton
            title="Login"
            onPress={() => setBottomSheetVisible(true)} // Show bottom sheet on press
            color={Colors[theme ?? "light"].black}
          />
          <DefaultButtonNoBackground
            title="Create an account"
            onPress={() => {
              router.push("/(auth)/signup");
            }}
            color={Colors[theme ?? "light"].black}
          />
          <ThemedText
            type="bold-12"
            style={{
              color: Colors[theme ?? "light"].white,
              marginVertical: 10,
            }}
          >
            Continue as a guest
          </ThemedText>
        </View>
      </LinearGradient>
      <Bottomsheet
        isVisible={isBottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)} // Close bottom sheet
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    width: "100%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 236,
    height: 94,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
