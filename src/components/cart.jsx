import React from 'react'
import CartItem from './cartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
    let cartItems=useSelector((data)=>data.cart.item)
    console.log(cartItems);
  return (
    <div className='cart-container'>
        <h2>Cart Items</h2>
        <CartItem data={cartItems}/>
    </div>
  )
}

export default Cart