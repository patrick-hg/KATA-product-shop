import React from "react";
import '../styles.css';
import ProductCard from "./ProductCard";


export default function Cart({products, cartItems, toggleToCart}) {

    return (
        <div className="content-container">
            <h1 className="title">Votre pannier</h1>
            <div className="cart-list">
                {
                    cartItems.map(id => {
                        const product = products.find(product => product.id === id);
                        return <ProductCard key={id} product={product} toggleToCart={toggleToCart} isInCart={true} />
                    })
                }
            </div>
        </div>
    );
}