import { loadStripe } from '@stripe/stripe-js';
import React, { createContext, useContext, useState } from 'react';
import { checkoutCart } from '../utils/api';
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
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

  const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
  }

  const handleQuantityIncrease = (itemId) => {
   
    setCartItems((state) => {

      return state.map((item) => {
          if (item._id === itemId) {
            item.quantity = item.quantity + 1;
            item.price = +(item.quantity * item.unitPrice).toFixed(2);
          }
          return item;
        
      })

    })

  }

  const handleQuantityDecrease = (itemId) => {
    const item = findItem(itemId)

    if (item && item.quantity < 2) {
      removeFromCart(itemId)
    } else {
      setCartItems((state) => {

        return state.map((item) => {
            if (item._id === itemId) {
                item.quantity = item.quantity - 1;
                item.price = +(item.quantity * item.unitPrice).toFixed(2);
              
            }
            return item;
          
        })
  
      })

    }
   

  }

  const findItem = (itemId) => {
    return cartItems.find((item) => item._id === itemId);
  }

  const handleCheckout = async () => {
    const lineItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: 'cad',
          product_data: {
            name: item.name
          },
          unit_amount: Math.round(item.price.toFixed(2)*100)
        },
        quantity: item.quantity
      }
    })

    try {

      const data = await checkoutCart(lineItems);
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({sessionId: data.id})
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        handleAddedToCart,
        handleQuantityIncrease,
        handleQuantityDecrease,
        getTotalPrice,
        handleCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}