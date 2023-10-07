import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useTotal } from '../components/CartContext';
import { useNavigation } from "@react-navigation/native";

export default function Carrito() {
  const { totalPrice, resetTotalPrice, totalQuantity } = useTotal();
  const [userName, setUserName] = useState(""); 
  const navigation = useNavigation();
  const handleCreateQuote = async () => {
    try {
      const response = await fetch("http://192.168.1.98:3000/api/cotizaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userName, 
          cantidad_productos: totalQuantity,
          valor_total: parseFloat(totalPrice.toFixed(2)),
          fecha_cotizacion: new Date().toISOString() 
        }),
      });
  
      if (response.ok) {
        console.log("Cotización creada con éxito");
        resetTotalPrice();
      } else {
        console.error("Error al crear la cotización");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    resetTotalPrice();
    navigation.navigate("price");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valor Total en Carrito:</Text>
      <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <Button title="Crear Cotización" onPress={handleCreateQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff", 
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});