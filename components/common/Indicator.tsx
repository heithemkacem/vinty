import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

interface IndicatorProps {
  page: number;
}

const Indicator: React.FC<IndicatorProps> = ({ page }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        {[0, 1, 2].map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorInput,
              {
                backgroundColor:
                  page === index
                    ? Colors[colorScheme ?? "light"].black
                    : Colors[colorScheme ?? "light"].lightGray,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
  indicatorInput: {
    width: 32,
    height: 4,
    borderRadius: 8,
  },
});

export default Indicator;
