import React, { useState } from "react";
import '../styles.css';


export default function Payment({items}) {
    const [quantities, setQuantities] = useState(() =>
        Object.fromEntries(items.map(item => [item.id, 1]))
    );

    return (
        <div className="content-container">
            <h2 className="title">Récapitulatif de votre panier</h2>
            <div className="cart-payment">
                <div className="cart-payment-list">
                    {
                        items.map(item => (
                            <div key={item.id} className="cart-payment-row">
                                <img className='product-card-image' src={`images/${item.image}`} alt={item.name} />
                                {item.name} - {item.price} €
                                <input
                                    className="quantity-input"
                                    type="number"
                                    min="0"
                                    aria-label={`Quantité de ${item.name}`}
                                    value={quantities[item.id]}
                                    onChange={event => setQuantities(current => ({
                                        ...current,
                                        [item.id]: Math.max(0, Number(event.target.value))
                                    }))}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="cart-payment-finalize">
                    <div className="cart-total">
                        <h2>Total: {items.reduce((total, item) => {
                            let quantity = quantities[item.id];
                            return total + (item ? item.price * quantity : 0);
                        }, 0)} €</h2>
                    </div>

                    <button className="btn-product">Finaliser l'achat</button>
                </div>
            </div>
            
        </div>
    );
}