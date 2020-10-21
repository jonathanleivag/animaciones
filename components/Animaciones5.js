import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export const Animaciones5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const pressBtn = () => {
    Animated.spring(animacion, { toValue: 0.8, useNativeDriver: true }).start();
  };

  const soltarBtn = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 1,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback onPressIn={pressBtn} onPressOut={soltarBtn}>
        <Animated.View
          style={[styles.btn, { transform: [{ scale: animacion }] }]}
        >
          <Text style={styles.texto}>Iniciar sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 28,
  },
  btn: {
    backgroundColor: "cornflowerblue",
    width: 280,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
