import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/gotham_pro/stylesheet.css';
import './assets/fonts/plumb/plumb.css';
import './assets/css/bootstrap.css';
import './assets/css/normalize.min.css';
import './assets/css/reset.min.css';
import './assets/scss/style.scss';
import App from './App';
import UserStore from './store/UserStore.js';
import ProductsStore from './store/ProductsStore.js';
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      products: new ProductsStore()
    }}

  >
  
      <App />
   
  </Context.Provider>

);
