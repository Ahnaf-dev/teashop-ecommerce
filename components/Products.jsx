import React from 'react';
import Product from "./Product";

const Products = ({products}) => {

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