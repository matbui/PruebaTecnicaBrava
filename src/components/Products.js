import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTotal } from './CartContext';

const apiUrl = 'http://192.168.1.98:3000';

function Products({ onTotalPriceChange }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const { totalPrice, updateTotalPrice, updateTotalQuantity } = useTotal(); // Agregar updateTotalQuantity

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error al comunicarse con el servidor:', error);
      });
  }, []);

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (product.product_id in updatedCart) {
      updatedCart[product.product_id].quantity += 1;
    } else {
      updatedCart[product.product_id] = {
        product,
        quantity: 1,
      };
    }
    setCart(updatedCart);
    const newTotalPrice = totalPrice + parseFloat(product.product_price);
    updateTotalPrice(newTotalPrice);

   
    const newTotalQuantity = Object.values(updatedCart).reduce((total, product) => total + product.quantity, 0);
    updateTotalQuantity(newTotalQuantity); 
  };

  return (
    <View >
      <Text style={styles.header}>Lista de Productos</Text>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Valor Total:</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={{ uri: item.product_image }} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.product_name}</Text>
              <Text style={styles.productCode}>Código del Producto: {item.product_code}</Text>
              <Text style={styles.productPrice}>Precio: ${item.product_price}</Text>
              <Text style={styles.productQuantity}>
                Cantidad en el Carrito: {cart[item.product_id]?.quantity || 0}
              </Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addToCartButtonText}>Agregar al Carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productCode: {
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 16,
    marginBottom: 4,
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalPriceContainer: {
    position: 'sticky',
    backgroundColor: '#ff0080',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, 
    top:0,
    padding:15
  },
  totalPriceText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Products;