import React from 'react';
import LineItem from './LineItem';
import {displayPrice} from '../helpers';

const Cart = (props) => {
  const {lineItems} = props;
  const { apiData } = props;
  const { cartOpen } = props;
  const {toggleCart} = props;
  const cartTotal = (lineItems) => {
    return lineItems.reduce((acc, next) => acc += next.price, 0)
  }

  return (
  <div className="cart">
      { lineItems.length ? (
    <div className="itemList">
      <div className="cartNav">
      <h2 className="white">Items In Your Cart</h2>
      <button className="closeCart" onClick={toggleCart}>X</button>
      </div>
      <ul>
        {lineItems.map(item => (
          <LineItem item={item} apiData={apiData} />
        ))}
      </ul>
      <span>Total: {displayPrice(cartTotal(lineItems))}</span>
    </div>
   
  ) : (
    <p className="emptyCart">Your cart is empty</p>
  )
  } {//closes lineItems.length}
  }
  </div>
  )}

export default Cart;
