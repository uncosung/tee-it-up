import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className = 'col-12'>
          <Header setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <ProductList product={this.state.products} setView = {this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className = 'col-12'>
          <Header setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <CartSummary setView = {this.setView} cart = {this.state.cart}/>
        </div>
      );
    } else {
      return (
        <div className = 'col-12'>
          <Header setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <ProductDetails addToCart = {this.addToCart} backToList = {this.backToList} key={this.state.view.id} params={this.state.view.params} setView = {this.setView}/>
        </div>
      );
    }

  }
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(products => {
        this.setState({
          products: products
        });
      });
  }
  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }
  getCartItems() {
    fetch('api/cart.php')
      .then(res => res.json())
      .then(cart => {
        this.setState({
          cart: cart
        });
      });
  }
  addToCart(product) {
    fetch('api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(product => {
        this.setState({
          cart: [...this.state.cart, product]
        });
      });
  }

}
