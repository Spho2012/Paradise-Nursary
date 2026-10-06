import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ onHome, onPlants, onCart }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <span className="brand">🌿 Paradise Nursery</span>
      <div className="links">
        <a onClick={onHome}>Home</a>
        <a onClick={onPlants}>Plants</a>
        <a className="cart-link" onClick={onCart} aria-label={`Cart with ${totalItems} items`}>
          <span style={{ fontSize: '1.4rem' }}>🛒</span>
          <span className="cart-count">{totalItems}</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
