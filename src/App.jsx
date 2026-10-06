import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'plants' | 'cart'

  if (view === 'home') {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <div className="landing-intro">
            <h1>Paradise Nursery</h1>
            <p>Where green meets serenity. Bring a little paradise home.</p>
            <button className="get-started-button" onClick={() => setView('plants')}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar
        onHome={() => setView('home')}
        onPlants={() => setView('plants')}
        onCart={() => setView('cart')}
      />
      {view === 'plants' ? (
        <ProductList />
      ) : (
        <CartItem onContinueShopping={() => setView('plants')} />
      )}
    </div>
  );
}

export default App;
