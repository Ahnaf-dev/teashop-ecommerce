import { useState, useEffect } from "react";
import Cart from './Cart'
import Link from 'next/link'


const Header = () => {

  return (
    <header className="header">
      <div className="container header__row">

      <h2><Link href="/">Tea Shop Ecommerce</Link></h2>
      
      <Cart/>
      </div>
    </header>
  )
}

export default Header