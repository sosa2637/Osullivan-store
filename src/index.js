import React from 'react'; 
import ReactDOM from 'react-dom/client'; // ← bien utiliser `react-dom/client`
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Styles/index.scss';
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
