import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

const CartContent = () => {
  const {cartItems, getTotalPrice, handleCheckout} = useCart()


  if (cartItems.length < 1) {
    return (
      <div className="cart-content">
        <h2>Cart is Empty.</h2>
      </div>
    )
  }
  return (
    <div className="cart-content">
      <h2>Order</h2>
      {cartItems.map((item) => (

        <CartItem key={item._id} {...item}/>
      ))}
      <div className="cart-total">
        <h3>Total:</h3>
        <p>${getTotalPrice().toFixed(2)}</p>
      </div>
      <button onClick={handleCheckout} className="btn--checkout btn">Proceed To Checkout</button>
    </div>
  )
}

export default CartContent