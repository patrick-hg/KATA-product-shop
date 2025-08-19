
import React from "react";
import '../styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { useNavigate } from "react-router-dom";

export default function Header ({cartItemCounter}) {

    const navigate = useNavigate();

    const navigateToCart = (e) => {
        navigate('/cart');
    }

    return (
        <div className="header">
            <img className='logo' src={`images/icon-128x128.png`} alt="logo" />
            <div>
                <h2 className="app-title">ALTEN SHOP</h2>
            </div>
            <div className="btn-cart" onClick={navigateToCart}>
                <ShoppingCartIcon fontSize='large' color='action'/>
                <span>{cartItemCounter}</span>
            </div>
        </div>
    );
}
