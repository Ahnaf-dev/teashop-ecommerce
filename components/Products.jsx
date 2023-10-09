import React from 'react';
import Product from "./Product";

const Products = ({products}) => {

  if (!products) {
    return (
      <section id="products" className="container">
        <h2>Inactive Database Loading</h2>
      </section>
    ) 
  }

  return (
    <section id="products" className="container">
      <h2>Featured Products</h2>
      <div className="products">
      {products.map((prod) => (
        <Product key={prod._id} {...prod}/>
      ))}

      </div>
     
    </section>
  )
}

export default Products