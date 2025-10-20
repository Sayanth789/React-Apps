import { formatMoney } from '../../utils/money';

export function ProductsGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-container">
            
            {/* Product Image */}
            <div className="product-image-container">
              <img className="product-image" src={product.image} alt={product.name} />
            </div>

            {/* Product Name */}
            <div className="product-name limit-text-to-2-lines">
              {product.name}
            </div>

            {/* Product Rating */}
            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src={`images/ratings/rating-${(product.rating?.stars ?? 0) * 10}.png`}
                alt={`${product.rating?.stars ?? 0} stars`}
              />
              <div className="product-rating-count link-primary">
                {product.rating?.count ?? 0}
              </div>
            </div>

            {/* Product Price */}
            <div className="product-price">
              {formatMoney(product.priceCents)}
            </div>

            {/* Product Quantity */}
            <div className="product-quantity-container">
              <select>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="product-spacer"></div>

            {/* Added to Cart */}
            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" alt="Added" />
              Added
            </div>

            {/* Add to Cart Button */}
            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>

          </div>
        );
      })}
    </div>
  );
}
