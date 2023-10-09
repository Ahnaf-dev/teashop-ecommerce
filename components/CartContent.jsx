import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

const CartContent = () => {
  const {cartItems} = useCart()
  return (
    <div className="cart-content">
      <h2>Order</h2>
      {cartItems.map((item) => (

        <CartItem key={item._id} {...item}/>
      ))}

    </div>
  )
}

export default CartContent