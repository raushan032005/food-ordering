import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import CartItem from '../../components/CartItem/CartItem';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { items, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={80} className="empty-icon" />
            <h2>Your cart is empty</h2>
            <p>Add some delicious items to your cart to get started!</p>
            <Link to="/menu" className="btn btn-primary">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/menu" className="back-link">
            <ArrowLeft size={20} />
            Back to Menu
          </Link>
          <h1 className="page-title">Your Cart</h1>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{getTotal()}</span>
              </div>
              
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>₹40</span>
              </div>
              
              <div className="summary-row">
                <span>Taxes:</span>
                <span>₹{Math.round(getTotal() * 0.05)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{getTotal() + 40 + Math.round(getTotal() * 0.05)}</span>
              </div>
              
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;