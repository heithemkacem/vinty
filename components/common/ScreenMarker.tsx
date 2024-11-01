import React, { ReactElement } from "react";
import {
  View,
  StyleSheet,
  useColorScheme,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

interface ScreenMarkerProps {
  image: ImageSourcePropType;
}

const ScreenMarker: React.FC<ScreenMarkerProps> = ({ image }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          Colors[colorScheme ?? "light"].white,
          Colors[colorScheme ?? "light"].primary,
        ]}
        style={styles.screenMarkerContainer}
      >
        <Image source={image} style={{ width: 64, height: 64 }} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  screenMarkerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  indicatorInput: {
    width: 32,
    height: 4,
    borderRadius: 8,
  },
});

export default ScreenMarker;
