import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemTotal = (item) => item.cost * item.quantity;
  const cartTotal = () => items.reduce((sum, item) => sum + itemTotal(item), 0);

  const increment = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const decrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // quantity would hit 0, so remove the item
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty. Add some plants to get started.</p>}

      {items.map((item) => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <h3>{item.name}</h3>
            <p>Unit price: ${item.cost}</p>
            <p>Subtotal: ${itemTotal(item)}</p>
          </div>
          <div className="qty">
            <button onClick={() => decrement(item)} aria-label={`Decrease ${item.name}`}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => increment(item)} aria-label={`Increase ${item.name}`}>+</button>
          </div>
          <button className="btn delete-btn" onClick={() => dispatch(removeItem(item.name))}>
            Delete
          </button>
        </div>
      ))}

      <div className="cart-total">Total Cart Amount: ${cartTotal()}</div>

      <div className="cart-actions">
        <button className="btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="btn" onClick={() => alert('Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
