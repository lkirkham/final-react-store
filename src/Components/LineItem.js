import React from 'react';
import {displayPrice} from '../helpers';

const LineItem = (props) => {
//   const {item} = props;
  const {name, price, salePrice, key, category, description, image, rating, ingredientsList, ingredientsTags} = props.item;
  return (
    <li className="lineItem">
      <img className="lineItemImage" src={image[0].url} alt={name}/>
        <div className="lineItemCopy">
          <p>{name}</p>
          <p>{displayPrice(price)}</p>
        </div>
    </li>
  )
}

export default LineItem;