import React from 'react';
import { Link } from "react-router-dom";

const Product = (props) => {
    //  console.log(props.product)
    const {name, price, salePrice, key, category, description, image, rating, ingredientsList, ingredientsTags} = props.product;
    const {addToCart} = props;
    const { id } = props;
    console.log(id);
    return(
        <div className="productCard" >
            {/* <Link to={`/products/${props.product.key}`}> */}
            <Link to={`/products/${id}`}>
            <img className="productCardImage" src={image[0].url} alt={name}/>
            <div className="productCardCopy">
            <h2>{name}</h2>
            <p>${price}</p>
            {/* <p>${salePrice}</p> */}
            {/* {console.log(price)} */}
            {/* below use an anonymous callback function to return addtoCart so its not called immediately */}
            <button onClick={() => addToCart(props.product)}>Add to Cart</button>
                <button>See Full Details</button>
            </div>
            </Link>
        </div>
    )
}

export default Product