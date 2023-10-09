import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({_id, image, name, unitPrice, price, quantity}) => {
  const {handleQuantityIncrease} = useCart()
  return (
    <div className="cart-item">
      <img src={image} />
      <p className="cart-item--name">{name}</p>
      <div className="cart-item__quantity">
        <span>-</span>
        <p>
        {quantity}

        </p>
        <span onClick={() => handleQuantityIncrease(_id)}>+</span>
      </div>
      <p className="cart-item--price">${price}</p>

    </div>
  )
}

export default CartItem