import React from 'react';
import LineItem from './LineItem';
import {displayPrice} from '../helpers';

const Cart = (props) => {
  const {lineItems} = props;
  const { apiData } = props;
  const cartTotal = (lineItems) => {
    return lineItems.reduce((acc, next) => acc += next.price, 0)
  }

  return lineItems.length ? (
    <div>
      <ul>
        {lineItems.map(item => (
          <LineItem item={item} apiData={apiData} />
        ))}
      </ul>
      <span>Total: {displayPrice(cartTotal(lineItems))}</span>
    </div>
   
  ) : (
    <p>Your cart is empty</p>
  )
}

export default Cart;