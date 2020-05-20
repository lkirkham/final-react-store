import React, {Component} from 'react';
import Product from "./Product.js"

class Store extends Component {  
    constructor(props) {
        super(props);
    };

  render() {
    const { apiData } = this.props;
    const { addToCart } = this.props;
    return (
      <>
      <h2>this is a store</h2>
      <div className="storeList">
        {apiData.map((product, index) => 
        <Product key={`${product.fields.key}`} id={`${product.id}`} product={product.fields} addToCart={addToCart}/>
        )
        }
      </div>
      </>
    );
  }
}

export default Store;
