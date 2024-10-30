import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ThemedText } from "../ThemedText"; // Import your components
import DefaultButton from "../butttons/Default";
import DefaultButtonNoBackground from "../butttons/DefaultButtonNoBackground";
import { IoniconsIcon } from "../icons/Ionicon";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface BottomsheetProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Bottomsheet({ isVisible, onClose }: BottomsheetProps) {
  const translateY = useSharedValue(SCREEN_HEIGHT);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT / 3);
      translateY.value = Math.min(translateY.value, 0);
    })
    .onEnd(() => {
      //if the user swipes down return the bottom sheet to its original position
      if (translateY.value > -SCREEN_HEIGHT / 6) {
        translateY.value = withSpring(-SCREEN_HEIGHT / 3);
      } else {
        translateY.value = withSpring(-SCREEN_HEIGHT / 3);
      }
    });

  const reanimatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: translateY.value < 0 ? 0.4 : 0,
    };
  });

  useEffect(() => {
    if (isVisible) {
      translateY.value = withSpring(-SCREEN_HEIGHT / 3);
    } else {
      translateY.value = withSpring(SCREEN_HEIGHT);
    }
  }, [isVisible]);

  return (
    <>
      <Animated.View
        style={[styles.overlay, overlayStyle]}
        pointerEvents={isVisible ? "auto" : "none"}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.bottomsheet_container, reanimatedBottomStyle]}
        >
          <View style={styles.line} />
          <View style={styles.container}>
            <View style={styles.content}>
              <ThemedText type="bold-20" style={{ marginBottom: 10 }}>
                What type of account would you like to Login?
              </ThemedText>
              <DefaultButton title="User" onPress={() => {}} />
              <DefaultButtonNoBackground
                title="Vending Machine Owner"
                onPress={() => {}}
              />
            </View>
          </View>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <IoniconsIcon name="close" size={23} />
          </Pressable>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  bottomsheet_container: {
    width: "100%",
    height: SCREEN_HEIGHT,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: SCREEN_HEIGHT,
    zIndex: 1200,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "#E9E9E9",
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: -50, // Adjust as needed
    right: 10,
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
