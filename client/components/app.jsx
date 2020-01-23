import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import CheckoutForm from './checkoutForm';
import Hero from './hero';
import DemoEnd from './demoEnd';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      added: '',
      buyerInfo: {}
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.productListFocus = React.createRef();
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  componentDidUpdate() {
    if (this.state.added) {
      setTimeout(() => {
        this.setState({
          added: ''
        });
      }, 2000);
    }
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className = 'col-12'>
          <Header added={this.state.added} productListFocus = {this.productListFocus} setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <Hero productListFocus = {this.productListFocus}/>
          <ProductList productListFocus = {this.productListFocus} addToCart = {this.addToCart} product={this.state.products} setView = {this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className = 'col-12'>
          <Header added={this.state.added} setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <CartSummary setView = {this.setView} cart = {this.state.cart}/>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div className = 'col-12'>
          <Header added={this.state.added} setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <CheckoutForm setView={this.setView} cart = {this.state.cart} handleSubmit = {this.placeOrder}/>
        </div>
      );
    } else if (this.state.view.name === 'demoEnd') {
      return (
        <div className = 'col-12'>
          <Header added={this.state.added} setView = {this.setView} cartItemCount = {0}/>
          <DemoEnd buyer={this.state.buyerInfo} cart={this.state.cart}/>
        </div>
      );
    } else {
      return (
        <div className = 'col-12'>
          <Header added={this.state.added} setView = {this.setView} cartItemCount = {this.state.cart.length}/>
          <ProductDetails addToCart = {this.addToCart} backToList = {this.backToList} key={this.state.view.params} params={this.state.view.params} setView = {this.setView}/>
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
          cart: [...this.state.cart, product],
          added: 'Show'
        });
      });
  }

  placeOrder(customer) {
    const buyer = {
      name: customer.name,
      creditCard: customer.creditCard,
      shippingAddress: customer.shippingAddress,
      cart: this.state.cart
    };
    fetch('api/orders.php', {
      method: 'POST',
      body: JSON.stringify(buyer),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          buyerInfo: buyer,
          view: {
            name: 'demoEnd',
            params: {}
          }
        });
      });
  }
}
