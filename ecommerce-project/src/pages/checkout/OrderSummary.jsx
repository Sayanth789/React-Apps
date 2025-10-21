import { DeliveryDate } from './DeliveryDate';
import { CartItemDetails } from './CartItemDetails'; 
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">    
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
      
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>
              < DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} /> 
              <div className="cart-item-details-grid">

              < CartItemDetails cartItem={cartItem} />
              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
            </div>
          </div>
        );
      })}
    </div>
  );
}