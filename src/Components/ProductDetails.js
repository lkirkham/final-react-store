import React from 'react';
import { render } from '@testing-library/react';

const ProductDetails = (props) => {
    const { apiData } = props;
    const { apiKey } = props;
    const id = props.match.params.product_id;
    console.log(id);

// const matchedProduct = apiData.length >= 0
// ? apiData
// .find(value => value.id == id)
// : null;

// const filteredApiData = matchedProduct ? matchedProduct.fields : null;


const filteredApiData = apiData.length >= 0 && apiData.find(value => value.id ==id);
console.log(filteredApiData.fields);
console.log(filteredApiData.fields.name);

render()
    return(
        <div>
          <h1>This is the page for product id {id}</h1>
          <h2>product name: {filteredApiData.fields.name}</h2>
          <h2>heres an image!</h2>
          <p>{filteredApiData.fields.description}</p>
          <img src={filteredApiData.fields.image[0].url} alt={filteredApiData.fields.name} />
        </div>
    );
    }

    
    export default ProductDetails;


