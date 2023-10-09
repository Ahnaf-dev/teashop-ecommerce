import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, {...item, price: item.unitPrice}]);
  };

  const handleAddedToCart = (itemId) => {
    const item = findItem(itemId)
    return Boolean(item);
  }

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
  };

  // Calculate the total number of items in the cart
  const getTotalItems = () => {
    return cartItems.length;
  };

  const handleQuantityIncrease = (itemId) => {
    setCartItems((state) => {

      return state.map((item) => {
          if (item._id === itemId) {
            item.quantity = item.quantity + 1;
            item.price = item.quantity * item.unitPrice;
            console.log(item.quantity)
          }
          return item;
        
      })

    })

  }

  const findItem = (itemId) => {
    return cartItems.find((item) => item._id === itemId);

  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        handleAddedToCart,
        handleQuantityIncrease
      }}
    >
      {children}
    </CartContext.Provider>
  );
}