import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


export default function 
() {
    const {cart} = useSelector((state) => state);
  return (
      <div>
           <div className="navbar">
            <NavLink to="/">
            <div>
            <img className='img' src="https://th.bing.com/th/id/OIP.u__Y549CrLuBuiNBh_q6WwHaFL?w=199&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            </div>
            </NavLink>
        
                <div className='box1'>
                    <NavLink to="/">
                    <p className='navText'>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className='navText'>
                        <FaShoppingCart/>
                        {
                            cart.length>0 &&
                            <span className='subcart'>{cart.length}</span>
                        }
                        
                        </div>
                    </NavLink>
                </div>
            </div>
    
    </div>  
    )
}
