import React from 'react'

const Products = ({products}) => {

  console.log(products)
  
  return (
    <section>
      {products.map((prod) => (
        <h1>{prod.name}</h1>
      ))}
    </section>
  )
}

export default Products