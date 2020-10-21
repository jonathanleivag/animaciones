import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

export const Animaciones7 = () => {
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacion1, {
          useNativeDriver: true,
          toValue: 300,
          duration: 1000,
        }),
        Animated.spring(animacion2, { useNativeDriver: true, toValue: 10 }),
        Animated.spring(animacion2, { useNativeDriver: true, toValue: 1 }),
        Animated.timing(animacion1, {
          useNativeDriver: true,
          toValue: 0,
          duration: 1000,
        }),
      ])
    ).start();
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          styles.caja,
          { transform: [{ translateY: animacion1 }, { scale: animacion2 }] },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: "cornflowerblue",
  },
});
