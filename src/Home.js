import React, { useState,useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa';
import Spinner from './Spinner';
import Product from './Product';

export default function Home() {
    const url = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

      try{
          const res = await fetch(url);
          const data = await res.json();
          setPosts(data);
      }

        catch(error){
         setPosts([]); 
        }
        setLoading(false);
    }  

    useEffect( () => {
        fetchProductData(); 
    },[])

  return (
    <div>
        {
            loading ? <Spinner/> :
            posts.length > 0 ?
            (<div className='posts'>
                {
                    posts.map((post) => (
                        <Product key={post.id} post={post}/>
                    ))
                }
            </div>) :
            <div className='empty'>
                <p>No Post Found</p>
            </div>
        }
    </div>
  )
}
