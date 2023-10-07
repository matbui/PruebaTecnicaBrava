import React, { createContext, useContext, useState } from 'react';

const TotalContext = createContext();

export function useTotal() {
  return useContext(TotalContext);
}

export function CartContext({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0); // Nuevo estado para la cantidad total

  const updateTotalPrice = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  const updateTotalQuantity = (newTotalQuantity) => { // Función para actualizar la cantidad total
    setTotalQuantity(newTotalQuantity);
  };

  const resetTotalPrice = () => {
    setTotalPrice(0);
  };

  const resetTotalQuantity = () => { // Función para restablecer la cantidad total
    setTotalQuantity(0);
  };

  return (
    <TotalContext.Provider
      value={{
        totalPrice,
        totalQuantity, // Agregar el valor de cantidad total al contexto
        updateTotalPrice,
        updateTotalQuantity, // Agregar función para actualizar cantidad total
        resetTotalPrice,
        resetTotalQuantity, // Agregar función para restablecer cantidad total
      }}
    >
      {children}
    </TotalContext.Provider>
  );
}