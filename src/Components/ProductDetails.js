import React from 'react';

const ProductDetails = (props) => {

    const { apiData } = props;
    const { apiKey } = props;
    const id = props.match.params.product_id;
    console.log(id);

    //filter through data 
// const filteredApiData = apiData.filter((value) => {
//     console.log('IM RUNNING');
//     // console.log(value)
//     return value.id == id;
//   })


//convert to filtered data
// console.log(apiData)

const matchedProduct = apiData.length >= 0
? apiData
.find(value => value.id == id)
: null;

const filteredApiData = matchedProduct ? matchedProduct.fields : null;

console.log(filteredApiData);

//or you could.....
// .filter(value => value.id == id)


    return(
        <div>
          <h1>This is the page for product id {id}</h1>
          <h2>product name: </h2>
        </div>
    );
    }

    
    export default ProductDetails;


