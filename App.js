import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Animaciones2 } from "./components/Animaciones2";
import { Animaciones1 } from "./components/Animaciones1";
import { Animaciones3 } from "./components/Animaciones3";
import { Animaciones4 } from "./components/Animacion4";
import { Animaciones5 } from "./components/Animaciones5";
import { Animaciones6 } from "./components/Animaciones6";
import { Animaciones7 } from "./components/Animaciones7";

export const App = () => {
  return (
    <ScrollView>
      <View style={styles.contenido}>
        <Text>Animacion 1 </Text>
        <Animaciones1 />

        <Text>Animacion 2 </Text>
        <Animaciones2 />

        <Text>Animacion 3 </Text>
        <Animaciones3 />

        <Text>Animacion 4 </Text>
        <Animaciones4 />

        <Text>Animaciones 5</Text>
        <Animaciones5 />

        <Text>Animaciones 6</Text>
        <Animaciones6 />

        <Text>Animaciones 7</Text>
        <Animaciones7 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});
