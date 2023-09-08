import React from 'react';
import { toast } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './CartSlice';

export default function Product({ post }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success('Item Added to Cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item Removed From Cart');
  };

  const { cart } = useSelector((state) => state);

  return (
    <div className='post'>
      <div className='title'>
        <p>{post.title}</p>
      </div>
      <div className='description'>
        <p>{post.description.split(" ").slice(0,10).join(" ") +"..."}</p>
      </div>
      <div >
        <img className='product-img' src={post.image} alt={post.title} /> 
      </div>
      <div className='price-btn'>
      <div className='price'>
        <p>${post.price}</p>
      </div>
      {cart.some((p) => p.id === post.id) ? (
        <button className='btn a' onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button className='btn ' onClick={addToCart}>Add to Cart</button>
      )}
    </div>
    </div>
  );
}
