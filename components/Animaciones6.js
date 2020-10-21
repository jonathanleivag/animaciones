import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

export const Animaciones6 = () => {
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacion2, {
          useNativeDriver: true,
          toValue: -30,
          duration: 500,
        }),
        Animated.timing(animacion1, {
          useNativeDriver: true,
          toValue: 60,
          duration: 500,
        }),
        Animated.timing(animacion2, {
          useNativeDriver: true,
          toValue: 30,
          duration: 500,
        }),
        Animated.timing(animacion1, {
          useNativeDriver: true,
          toValue: 0,
          duration: 500,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View
        style={[
          styles.caja,
          {
            transform: [{ translateY: animacion1 }, { translateX: animacion2 }],
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 10,
    height: 10,
    backgroundColor: "cornflowerblue",
  },
});
