import React, {Component} from 'react';
import Product from "./Product.js"
import Welcome from "./Welcome.js"

class Store extends Component {  
    constructor(props) {
        super(props);
    };


    // filterStoreAll = () => {
    //   {apiData.map((product, index) => 
    //     <Product key={`${product.fields.key}`} id={`${product.id}`} product={product.fields} addToCart={addToCart}/>
    //     )}
 
    // }

  render() {
    const { apiData } = this.props;
    const { addToCart } = this.props;
    console.log(apiData);
    return (
      <>
       <Welcome />
      <div className="storeList wrapper">
        {apiData.map((product, index) => {
          return <Product key={`${product.fields.key}`} id={`${product.id}`} product={product.fields} addToCart={addToCart}/>
        })}
      </div>
      </>
    );
  }
}

export default Store;
