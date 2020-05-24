import React from 'react';
import { Link } from "react-router-dom";

const Product = (props) => {
    const {name, price, salePrice, key, category, container, description, image, rating, ingredientsList, ingredientsTags} = props.product;
    const {addToCart} = props;
    const { id } = props;
    return(
        <div className="productCard" >
            <Link to={`/products/${id}`}>
            {image
          ? <img className="productCardImage" src={image[0].url} alt={name}/>
          : <h2>theres no image for this product</h2> //insert generic product shot instead
          }
            <div className="productCardCopy">
            <h5 className="cardCategory">{category}</h5>
            <h2 className="cardTitle">{name}</h2>
            </div>
            </Link>
            <div className="cardPricing">
        {/* <p className="cardPrice">${price} /{container}</p> */}
        {/* <p className="cardPrice">${price}</p> */}
            <button className="bLight" onClick={() => addToCart(props.product)}>Add to Cart</button>
            </div>

        </div>
    )
}

export default Product