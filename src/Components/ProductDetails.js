import React from 'react';
import { render } from '@testing-library/react';

const ProductDetails = (props) => {
    const { apiData } = props;
    const { apiKey } = props;
    const id = props.match.params.product_id;
    console.log(id);

const matchedProduct = apiData.length >= 0
? apiData
.find(value => value.id == id)
: null;

const filteredApiData = matchedProduct ? matchedProduct.fields : null;

//here's what's not working (want to access the keys to fill the template below):
// console.log(filteredApiData.fields);
// console.log(filteredApiData.fields);
// console.log(filteredApiData.fields.name);
// console.log(filteredApiData.name);

render()
    return(
        <div>
          <h1>This is the page for product id {id}</h1>
          <h2>product name: </h2>
        </div>
    );
    }

    
    export default ProductDetails;


