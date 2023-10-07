import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppNavBar(props) {
  const carrito = props.carrito;
  const texto = props.texto;

  const navigation = useNavigation();

  const handleOnPress = () => {
    if (carrito === true) {
      navigation.navigate("home");
    } else {
      navigation.navigate("carrito");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonText}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40, // Cambiamos el valor para que sea más redondo
    backgroundColor: "#ff0080", // Cambiamos el color a rosado
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});