import React from 'react'

const Product = ({name, image, price}) => {
  return (
    <div className="product">
      <img src={image}  />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  )
}

export default Product