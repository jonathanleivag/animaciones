import React, { useEffect, useState } from "react";
import { Animated, StyleSheet } from "react-native";

export const Animaciones2 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 7,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={[styles.caja, { scaleX: animacion }]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: "cornflowerblue",
  },
});
