import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Menu() {

    const navigate = useNavigate();
    
    const homeClickedHandler = (e) => {
        navigate('/');
    };
    
    const productsClickedHandler = (e) => {
        navigate('/');
    };

    const cartClickedHandler = (e) => {
        navigate('/cart');
    };



    
    return (
        <MenuList className='menu'>
         <MenuItem onClick={homeClickedHandler}>
           <ListItemIcon>
             <HomeIcon fontSize="small" />
           </ListItemIcon>
           <ListItemText>Accueil</ListItemText>
         </MenuItem>
         <MenuItem onClick={productsClickedHandler}>
           <ListItemIcon>
             <CategoryIcon fontSize="small" />
           </ListItemIcon>
           <ListItemText>Produits</ListItemText>
         </MenuItem>
         <MenuItem>
           <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
           </ListItemIcon>
           <ListItemText onClick={cartClickedHandler}>Cart</ListItemText>
         </MenuItem>
       </MenuList>
    );
}

