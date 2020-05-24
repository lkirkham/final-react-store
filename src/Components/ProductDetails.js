import React from 'react';
import { render } from '@testing-library/react';

const ProductDetails = (props) => {
    const { apiData } = props;
    const id = props.match.params.product_id;
    console.log(id);

    console.log(props.apiData);

const matchedProduct = apiData.length > 0
? apiData
.find(value => value.id == id)
: null;

console.log({matchedProduct});

render()
    return(
        <div className="wrapper">
            <div className="detailsCard">
                <div className="detailsImage">
                    {matchedProduct.fields.image[0].url
                    ? <img src={matchedProduct.fields.image[0].url} alt={matchedProduct.fields.name} />
                    : <h2>theres no image for this product</h2>
                    }
                </div>
                <div className="detailsCopy">
                    {/* <h1>This is the page for product id {id}</h1> */}
                    <h1>{matchedProduct.fields.name}</h1>
                    <h2>${matchedProduct.fields.price} PER {matchedProduct.fields.container}</h2>
                    <p>{matchedProduct.fields.description}</p>
                    { matchedProduct.fields.warning && <p className="warning">WARNING: {matchedProduct.fields.warning}</p> }
                </div>
            </div>
        </div>
    );
    }

    
    export default ProductDetails;


