import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

export const Animaciones4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });


  return (
    <View>
      <Animated.View
        style={[styles.caja, { transform: [{ rotate: interpolacion }] }]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
