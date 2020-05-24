//imported dependancies
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//imported styles
import './App.css';

//imported components
import Welcome from './Components/Welcome.js'
import Store from './Components/Store.js'
import Cart from './Components/Cart.js'
import ProductDetails from './Components/ProductDetails.js'


class App extends Component {  

  constructor(props) {
      super(props);

// state
  this.state = {
    data: [],
    lineItems: [],
    cartOpen: false,
  };
}

//api details (ORIGINAL)
async fetchMyData() {
  const apiKey = "key1dezf5D1nmv7o2";
  try {
    const response = await fetch(`https://api.airtable.com/v0/appBVzVpV6uFwQnJF/products?api_key=${apiKey}`);
    const apiData = await response.json();
    this.setState({
      data: apiData.records,
    })
  } catch(error) {
    console.log(error)
  }
  console.log(this.state.data);
}

componentDidMount() {
  //call api
  this.fetchMyData();
};

//functions
toggleCart = () => {
  const cartNewState = !this.state.cartOpen
  this.setState({
    cartOpen: cartNewState
  }, () => {console.log('updated!')})
}

addToCart = (product) => {
  this.setState({
    lineItems: [...this.state.lineItems, product]
  })
}


render(){
  return (
    <>
      <nav>
        <div className="wrapper">
          <h2 className="logo">the good witch</h2>
          <div className="cartWrapper">
            <span onClick={this.toggleCart} className="cartToggle"><h2 className="white">Cart ({this.state.lineItems.length})</h2></span>
            {this.state.cartOpen && <Cart apiData={this.state.data} lineItems={this.state.lineItems} />}
          </div>
        </div>
      </nav>
      <Welcome />
      <Router>
        <Switch>
        {this.state.data.length
          ? 
        <Route
          exact path='/products/:product_id'
          // exact path={`/products/${this.state.data.key}`}
          render={(props) => <ProductDetails {...props} apiData={this.state.data} />}
        />
        : null}
           <Route
              exact path='/'
              render={(props) => <Store {...props} apiData={this.state.data} addToCart={this.addToCart} />}
            />
        </Switch>
      </Router>
    </>
  );
}
}

export default App;
