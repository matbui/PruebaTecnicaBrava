import { View, Text } from "react-native";
import Products from "../components/Products";
import AppNavBar from "../components/AppBar";
import React, { useState } from 'react';

export default function Home(){
    const [totalPrice, setTotalPrice] = useState(0);

    const handleTotalPriceChange = (newTotalPrice) => {
      setTotalPrice(newTotalPrice);
    };
    return(
        <View>
            <Products onTotalPriceChange={handleTotalPriceChange}></Products>
            <AppNavBar totalPrice={totalPrice} carrito={false} texto="carrito" ></AppNavBar>
            
        </View>
    )
}