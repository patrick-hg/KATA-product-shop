
import React from "react";
import "../styles.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({product, isInCart, toggleToCart}) {

    const handleError = (e) => {
        e.target.src = "images/default.jpg"        
    };

    const getRatingClass = (rating) => {
        if (rating >= 4) {
            return 'rating-good';
        } else if (rating < 3) {
            return 'rating-bad';
        }
        return 'rating-ok';
    }

    return (
        <div key={product.id} className='product-card'>
            <img className='product-card-image' src={`images/${product.image}`} alt={product.name} onError={handleError} />
            
            <div className="product-card-info">
                <div className="product-card-info-row">
                    <div className='product-card-info-category'>
                        {product.category}
                    </div>
                    <div>
                        <span className={`product-card-rating ${getRatingClass(product.rating)}`}>{product.rating}</span>
                    </div>
                </div>

                <h4 className="product-card-title">{product.name}</h4>
                <div>
                    <p>{product.description}</p>
                </div>


                <div className="product-card-info-row">
                    <div>
                        {product.price} €
                    </div>
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={isInCart}
                            onChange={() => toggleToCart(product.id)} >
                        </input>
                        <span className="slider">
                            <span className="slider-label">
                                <ShoppingCartIcon fontSize="small" />
                                {isInCart ? " In Cart" : " Add to Cart"}
                            </span>
                        </span>
                        isInCart: {isInCart}
                    </label>
                </div>
                
            </div>
        </div>
    );
}

