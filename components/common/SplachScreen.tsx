import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  useColorScheme,
  Dimensions,
  Image,
} from "react-native";

const SplashScreen = ({ onAnimationComplete }: any) => {
  const circleScale = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showSecondImage, setShowSecondImage] = useState(false);
  const theme = useColorScheme();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(circleScale, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowSecondImage(true);
      setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 2000); // Show the second image for 1 second before completing
    });
  }, []);

  return (
    <View style={styles.container}>
      {!showSecondImage && (
        <LinearGradient
          colors={[
            Colors[theme ?? "light"].white,
            Colors[theme ?? "light"].primary,
          ]}
          style={StyleSheet.absoluteFill}
        />
      )}
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: circleScale }],
            opacity: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          width={232}
          height={302}
        />
      </Animated.View>
      {showSecondImage && (
        <Animated.View
          style={[styles.secondImageContainer, { opacity: fadeAnim }]}
        >
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.secondImage}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // This ensures the background is white when the gradient fades out
  },
  circle: {
    width: Dimensions.get("window").height + 200,
    height: Dimensions.get("window").height + 200,
    borderRadius: Dimensions.get("window").height + 200 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  secondImageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  secondImage: {
    // Adjust the size as needed
    width: 318,
    height: 126,
  },
});

export default SplashScreen;
