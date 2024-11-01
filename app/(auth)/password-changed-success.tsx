import { MainContainer } from "@/components/containers/MainContainer";
import YouAreVintyImage from "@/components/logo/YouAreVinty";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DefaultButton from "@/components/buttons/Default";
import React, { useEffect } from "react";
import { useRouter } from "expo-router"; // Or your preferred navigation library
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useColorScheme } from "react-native";

const PasswordChangedSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login"); // Replace with your desired route
    }, 10000);
    return () => clearTimeout(timer); // Clear timeout if the component unmounts early
  }, [router]);
  const theme = useColorScheme();
  return (
    <MainContainer>
      <ThemedView
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingHorizontal: 20,
        }}
      >
        <YouAreVintyImage />
        <ThemedText
          type="bold-30"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          Password changed
        </ThemedText>

        <ThemedText
          type="regular-16"
          style={{
            textAlign: "center",
            marginTop: 20,
            color: Colors[theme ?? "light"].darkGray,
          }}
        >
          Your password has been changed succesfully
        </ThemedText>
        <DefaultButton
          style={{ marginTop: 50 }}
          title="Back to login"
          onPress={() => router.replace("/(auth)/login")}
        />
      </ThemedView>
    </MainContainer>
  );
};

export default PasswordChangedSuccess;
