import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "./CartSlice";
import { toast } from "react-hot-toast";




import React from 'react'

export default function CartItem({ item,itemIndex })  {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");

  }

  return (
    <div className="cartProduct">
       
        <div>
          <img className="cartProduct-img" src={item.image}/>
        </div>
        <div>
            <p className="cartTitle">{item.title}</p>
            <p className="cartDescription">{item.description}</p>
            <div className="cartProductBottom">
                <p className="price cart">${item.price}</p>
                <div className="deleteBtn" onClick={removeFromCart}><AiFillDelete/></div>
            </div>            
        </div>
    </div>
  );
};

