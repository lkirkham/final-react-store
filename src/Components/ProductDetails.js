import React from 'react';

const ProductDetails = (props) => {

    const { apiData } = props;
    const { apiKey } = props;
    // console.log(apiData);
    // const {name, price, salePrice, key, category, description, image, rating, ingredientsList, ingredientsTags} = apiData;
    // console.log(props.match.params.product_id);
    const id = props.match.params.product_id;
    console.log(id);

    //filter through data 
// const filteredApiData = apiData.filter((value) => {
//     console.log('IM RUNNING');
//     // console.log(value)
//     return value.id == id;
//   })


const filteredApiData = apiData
.find(value => value.id == id)

console.log(filteredApiData);

//or you could.....
// .filter(value => value.id == id)



//   const productDetailsData = filteredApiData.fields;

//DARSHANA - why don't these workkkkkkkkk!? AHH. 
//   console.log(filteredApiData.id);
//   console.log(filteredApiData.title);
//   console.log(filteredApiData.fields.title);
//   console.log(filteredApiData.fields);
//   console.log(filteredApiData.fields.id);



    return(
        <div>
          <h1>This is the page for product id {id}</h1>
          <h2>product name:  </h2>
        </div>
    );
    }

    
    export default ProductDetails;


