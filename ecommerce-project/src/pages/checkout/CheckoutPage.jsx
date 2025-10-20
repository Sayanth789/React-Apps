import axios from 'axios';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import './checkout-header.css';
import './CheckoutPage.css';

export function CheckoutPage({ cart  }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);


    // useEffect(() => {
    //     const fetchCheckoutData = async () => {
    //         let response = await axios.get(
    //             '/api/delivery-options?expand=estimateDeliveryTime'
    //         );
    //         setDeliveryOptions(response.data);

    //         response = await axios.get('/api/payment-summary');
    //         setPaymentSummary(response.data)
    //     };
        
    //     fetchCheckoutData();
    // }, []);

    useEffect(() => {
        const fetchCheckoutData = () => {
            // Mock delivery options
            const mockDeliveryOptions = [
                { id: 1, priceCents: 0, estimateDeliveryTimeMs: Date.now() + 5*24*60*60*1000 },
                { id: 2, priceCents: 500, estimateDeliveryTimeMs: Date.now() + 2*24*60*60*1000 },
            ];
            setDeliveryOptions(mockDeliveryOptions);

            // Mock payment summary
            const mockPaymentSummary = {
                totalItems: 3,
                productCostCents: 3000,
                shippingCostCents: 500,
                totalCostBeforeTaxCents: 3500,
                taxCents: 350,
                totalCostCents: 3850
            };
            setPaymentSummary(mockPaymentSummary);
        };

        fetchCheckoutData();
    }, []);



    return (
        <>
            <title>Checkout</title>
            <div className='checkout-header'>
                <div className='header-content'>
                    <div className='checkout-header-left-section'>
                        <a href='/'>
                            <img className='logo' src='images/logo.png' />
                            <img className='moblie-logo' src='images/mobile-logo.png' />
                        </a>
                    </div>
                    <div className='checkout-header-middle-section' >
                        Checkout (<a className='return-to-home-link'
                        href='/3'>3 items</a>)
                    </div>

                    <div className='checkout-header-right-section'>
                        <img src='images/icons/checkout-lock-icon.png' />
                    </div>
                </div>
            </div>

            <div className='checkout-page'>
                <div className='page-title'>Review your order</div>

                <div className='checkout-grid'>
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary}  />

                </div>
            </div>
        </>
    );
}