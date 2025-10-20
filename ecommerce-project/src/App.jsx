import axios from 'axios';
import { Routes, Route } from 'react-router';
import {useState, useEffect} from 'react';
import { HomePage  } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrderPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);


  // useEffect(() => {
  //   const fetchAppData = async () => {
  //     const response = await axios.get('/api/cart-items?expand=product');
  //     setCart(response.data);
  //   };

  //   fetchAppData();
  // }, []);

  useEffect(() => {
    const mockCart = [
      { 
        product: { id: 1, name: 'Product 1', priceCents: 1000, image: 'images/product1.png' },
        quantity: 1,
        deliveryOptionId: 1
      },
      { 
        product: { id: 2, name: 'Product 2', priceCents: 2000, image: 'images/product2.png' },
        quantity: 2,
        deliveryOptionId: 2
      }
    ];

    setCart(mockCart);
  }, []);


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
    </Routes>
  ) 
}

export default App