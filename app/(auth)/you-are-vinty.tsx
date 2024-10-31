import { MainContainer } from "@/components/containers/MainContainer";
import YouAreVintyImage from "@/components/logo/YouAreVinty";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useEffect } from "react";
import { useRouter } from "expo-router"; // Or your preferred navigation library

const YouAreVinty = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(dashboard)/"); // Replace with your desired route
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clear timeout if the component unmounts early
  }, [router]);

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
          type="bold-20"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          You are a Vinty now! You can start navigating.
        </ThemedText>
      </ThemedView>
    </MainContainer>
  );
};

export default YouAreVinty;
