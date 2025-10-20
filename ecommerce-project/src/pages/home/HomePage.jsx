import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';


export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const getHomeData = async () => {
    //         const response = await axios.get('/api/products');
    //         setProducts(response.data);
    //     };
        
    //     getHomeData();
    // }, [])
    useEffect(() => {
        const mockProducts = [
            { id: 1, name: 'Product 1', priceCents: 1000, image: 'images/product1.png' },
            { id: 2, name: 'Product 2', priceCents: 2000, image: 'images/product2.png' },
            { id: 3, name: 'Product 3', priceCents: 3000, image: 'images/product3.png' },
        ];
        setProducts(mockProducts);
    }, []);



    return (
        <>
            <title>
                Ecommerce Project
            </title>
            <Header cart={cart} />
            <div className='home-page'>
                <ProductsGrid products={products} />
            </div>
        </>
    )
}