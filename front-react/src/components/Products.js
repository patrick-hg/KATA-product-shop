import React from "react";
import '../styles.css';
import ProductCard from "./ProductCard";

export default function Products({products, cartItems, toggleToCart}) {

    const filteredproducts = products;
  

    return (
        <div className='content-container'>
            <div className='content-title-space'>
                <div>
                    <h3>Liste des produits</h3>
                </div>
                <div className="btn-product">
                    Créer produit
                </div>
            </div>

            <div className='products-grid'>
                {
                    filteredproducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            isInCart={cartItems.includes(product.id)}
                            toggleToCart={toggleToCart} 
                            />
                    ))
                }
            </div>
        </div>
    );
} 

