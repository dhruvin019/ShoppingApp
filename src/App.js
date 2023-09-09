import {Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import { Route } from 'react-router-dom';


function App() {
  return (
   <><div className="header">
      <Navbar />
    </div>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>

   </Routes></>
   
  );
}

export default App;



