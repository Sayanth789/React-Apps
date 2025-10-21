import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrderData = async () => {
      const response = axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }
    
    fetchOrderData();
  }, []);



  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} /> 
      </div>
    </>
  );
}
