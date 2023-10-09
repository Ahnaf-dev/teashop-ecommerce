import React from 'react'
import { useCart } from '../context/CartContext'

const Product = ({_id, name, image, price}) => {
  const {addToCart, handleAddedToCart} = useCart();
  const isAdded = handleAddedToCart(_id);
  return (
    <div className="product">
      <img src={image}  />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => { 
        if (!isAdded) {
          addToCart({_id, name, image, unitPrice: price, quantity: 1})

        }
        }} className="btn btn--black">{isAdded ? 'Added To Cart' : "Add To Cart"}</button>
    </div>
  )
}

export default Product