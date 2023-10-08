import {useEffect, useState} from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import {getProducts} from "../utils/api";



export default function Home({products, error}) {

  return (
    <>
    <Header/>
    <Hero/>
    <Products products={products} />
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    // Fetch data from an API or a database
    const data = await getProducts();

    // Return the data as props
    return {
      props: {
        products: data
      },
    };
  } catch (error) {
    // Handle errors and pass them as props
    return {
      props: {
        error: 'An error occurred while fetching data.',
      },
    };
  }
}