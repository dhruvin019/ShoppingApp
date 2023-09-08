import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Store.js';
import App from './App.js';
import {Toaster} from "react-hot-toast"
import "./App.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>
 <Provider store={Store}>

    <App />
    <Toaster/>
  </Provider>
  </BrowserRouter>



);
