import React from 'react';
import {displayPrice} from '../helpers';

const LineItem = (props) => {
//   const {item} = props;
  const {name, price, salePrice, key, category, description, image, rating, ingredientsList, ingredientsTags} = props.item;
  return (
    <li>
      <img src={image[0].url} alt={name}/>
        <span>{name}</span>
        <span>{displayPrice(price)}</span>
    </li>
  )
}

export default LineItem;