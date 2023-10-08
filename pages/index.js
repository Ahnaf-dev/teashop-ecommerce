import {useEffect, useState} from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import {getProducts} from "../utils/api";
import axios from "axios";



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
    const response = await getProducts();

    return {
      props: {
        products: response
      },
    };
  } catch (error) {
    // Handle errors and pass them as props
    return {
      props: {
        error: `An error occurred while fetching data., ${error}`,
      },
    };
  }
}