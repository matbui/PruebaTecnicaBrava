import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
export default function Price(){
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.98:3000/api/cotizaciones')
      .then((response) => response.json())
      .then((data) => setCotizaciones(data))
      .catch((error) => console.error('Error al obtener cotizaciones', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cotizaciones</Text>
      <FlatList
        data={cotizaciones}
        keyExtractor={(item) => item.cotizacion_id.toString()}
        renderItem={({ item }) => (
            <View style={styles.cotizacionContainer}>
            <Text style={styles.cotizacionTitle}>Cotización ID: {item.cotizacion_id}</Text>
            <Text style={styles.cotizacionText}>Usuario ID: {item.user_id}</Text>
            <Text style={styles.cotizacionText}>Cantidad de Productos: {item.cantidad_productos}</Text>
            <Text style={styles.cotizacionText}>Valor Total: ${item.valor_total.toFixed(2)}</Text>
            <Text style={styles.cotizacionText}>Fecha de Cotización: {item.fecha_cotizacion}</Text>
            </View>
        )}
        style={styles.flatList} // Agrega este estilo al FlatList
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cotizacionContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cotizacionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cotizacionText: {
    fontSize: 16,
    marginBottom: 4,
  },
  flatList: {
    paddingHorizontal: 16,
  },
});
