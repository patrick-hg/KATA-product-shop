import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Products from './components/Products';


function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      fetch('products.json')
          .then((response => response.json()))
          .then(data => setProducts(data));
  }, []);


  const toggleToCart = (productId) => {
    console.log('in toggleCart, productId: ' + productId);
    setCartItems(previousState => {
      console.log('toggleCart: previousState', previousState);
      return previousState.includes(productId) ? previousState.filter(id => id !== productId) : [...previousState, productId]
    }
    )
  }

  return (
    <div className="App">
      <div className='container'>
      
        <Router>
          <Header cartItemCounter={cartItems.length} />
          
          <div className='middle-container'>
            <Menu />

            <div className='router'>
              <Routes>
                <Route path='/' element={<Products products={products} cartItems={cartItems} toggleToCart={toggleToCart}/>}></Route>
                <Route path='/cart' element={<Cart products={products} cartItems={cartItems} toggleToCart={toggleToCart}/>}></Route>
              </Routes>
            </div>
          </div>
        </Router>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
