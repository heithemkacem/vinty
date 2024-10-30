import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  useColorScheme,
  Pressable,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router"; // Import useRouter

const OnboardingScreen = () => {
  const theme = useColorScheme();
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page
  const onboardingRef = useRef<Onboarding>(null);
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/Illustrations/onboarding-1.png")}
                style={styles.image}
              />
            ),
            title: "Look what you need first",
            subtitle:
              "Discover vending machines around you and see exactly what they offer.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/Illustrations/onboarding-2.png")}
                style={styles.image}
              />
            ),
            title: "Find a nearby vending machine",
            subtitle:
              "Quickly locate the nearest vending machines and know the pricing of every product.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/Illustrations/onboarding-3.png")}
                style={styles.image}
              />
            ),
            title: "Locate it and follow the path",
            subtitle:
              "Get step-by-step directions to your chosen vending machine, making it easy to find exactly what you need.",
          },
        ]}
        showSkip={false} // Disable the built-in skip button
        pageIndexCallback={(index) => setCurrentPage(index)}
        ref={onboardingRef}
        NextButtonComponent={() => (
          <Pressable
            style={styles.buttons}
            onPress={() => onboardingRef.current?.goNext()}
          >
            <ThemedText
              type="semi-bold-18"
              lightColor={Colors[theme ?? "light"].primary}
              darkColor={Colors[theme ?? "light"].primary}
            >
              Next
            </ThemedText>
          </Pressable>
        )}
        DoneButtonComponent={() => (
          <Pressable
            style={styles.buttons}
            onPress={() => {
              router.push("/(auth)/home"); // Navigate to the home screen
            }}
          >
            <ThemedText
              type="semi-bold-18"
              lightColor={Colors[theme ?? "light"].primary}
              darkColor={Colors[theme ?? "light"].primary}
            >
              Get Started
            </ThemedText>
          </Pressable>
        )}
        bottomBarColor={Colors[theme ?? "light"].white}
        titleStyles={styles.title}
        subTitleStyles={styles.subtitle}
        DotComponent={({ selected }) => (
          <ThemedView
            style={{
              width: selected ? 40 : 8,
              height: 8,
              marginHorizontal: 3,
              backgroundColor: selected ? "#000" : "#666",
              borderRadius: 10,
            }}
          />
        )}
      />
      <ThemedView style={styles.topLeft}>
        <ThemedText type="semi-bold-18">
          {currentPage + 1}{" "}
          <ThemedText
            type="semi-bold-18"
            lightColor={Colors[theme ?? "light"].subtitle}
            darkColor={Colors[theme ?? "light"].subtitle}
          >
            /3
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.topRight}>
        <ThemedText
          type="semi-bold-18"
          lightColor={Colors[theme ?? "light"].black}
          darkColor={Colors[theme ?? "light"].black}
          onPress={() => router.push("/(auth)/home")}
        >
          Skip
        </ThemedText>
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontFamily: "MontserratExtraBold",
    color: Colors.light.black,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.light.subtitle,
    fontFamily: "MontserratSemiBold",
    marginTop: 10,
  },
  buttons: {
    padding: 20,
  },
  topLeft: {
    position: "absolute",
    top: 40,
    left: 20,
    display: "flex",
  },
  topRight: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

export default OnboardingScreen;
