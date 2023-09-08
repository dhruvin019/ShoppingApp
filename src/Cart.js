import React, { useEffect, useState } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
 

export default function Cart() {
  const {cart} =useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ? 
        (<div className='cartPage'>
          <div >
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

          <div className='cartPagedetail'>
            <div className='cartPageTitle'>Your Cart</div>
            
            <p className='total'>
              <span>Total Items: {cart.length}</span>
            </p>
            <div className='total'>
              <p>Total Amount: <span className='total value'>${totalAmount}</span></p>
              <button className='cartPagebtn'>CheckOut Now</button>
            </div>
            </div>
          </div>) :
        (
          <div className='emptyCart'>
          <h1 className='emptyCartHeader'>Cart Empty</h1>
          <Link to={"/"}>
          <button className='emptyCartbtn'>Shop Now</button>
          </Link>
          </div>
        ) 
      }
    </div>
  );
};
