import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {

    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {

      setCart([...cart, { ...product, quantity: product.quantity }]);
    }
  };

  const removeFromCart = (product, decrease = false) => {
    if (decrease && product.quantity > 1) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter(item => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  const removeAllFromCart = () => {
       setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
