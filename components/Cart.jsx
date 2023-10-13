import React, {useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import CartContent from './CartContent';
import Dialog from './Dialog';
import { useCart } from '../context/CartContext';
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { getTotalItems } = useCart();


  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <>
    <div onClick={() => setIsOpen(true)} className="cart-icon" style={{ position: 'relative', cursor: "pointer" }}>
    <FaShoppingCart size={32}  />
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          background: 'red',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '14px',
        }}
      >
        {getTotalItems()}
      </div>
   
  </div>
  <Dialog isOpen={isOpen} onClose={handleClose}>
      <CartContent/>
    </Dialog>
  </>
  )
}

export default Cart