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

// api details (MY ATTEMPT TO GET A PROMISE & RESOLVE IT - bbut it looks like just the same code as above just written a bit diffferently.....)
// async fetchMyData() {
//   async function asyncData() {
//     const apiKey = "key1dezf5D1nmv7o2";
//     const response = await fetch(`https://api.airtable.com/v0/appBVzVpV6uFwQnJF/products?api_key=${apiKey}`);
//     const data = await response.json();
//     return data;
//   } 
  
//   (async () => {
//     const result = await asyncData();
//     console.log(result.records);
//     const apiData = result.records;
//     this.setState({
//     data: apiData,
//     })
//   })()

// }


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
        <span onClick={this.toggleCart} className="cartToggle">Cart ({this.state.lineItems.length})</span>
        {this.state.cartOpen && <Cart apiData={this.state.data} lineItems={this.state.lineItems} />}
      </nav>
      {/* <header>
      <h1>Helloo i am a header</h1>
      </header> */}
      <Router>
        <Switch>
        <Route
          exact path='/products/:product_id'
          // exact path={`/products/${this.state.data.key}`}
          render={(props) => <ProductDetails {...props} apiData={this.state.data} />}
        />
        {this.state.data.length >= 0 
          ? 
           <Route
              exact path='/'
              render={(props) => <Store {...props} apiData={this.state.data} apiKey={"key1dezf5D1nmv7o2"} addToCart={this.addToCart} />}
            />
          : null}
        {/* <Route
          exact path='/'
          render={(props) => <Store {...props} apiData={this.state.data} apiKey={"key1dezf5D1nmv7o2"} addToCart={this.addToCart} />}
        /> */}
        </Switch>
      </Router>
    </>
  );
}
}

export default App;
