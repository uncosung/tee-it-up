import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import CheckoutForm from './checkoutForm';
import Hero from './hero';
import DemoEnd from './demoEnd';
import DemoStart from './demoStart';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'demoStart',
        params: {}
      },
      cart: [],
      checkoutCart: [],
      added: '',
      buyerInfo: {},
      quantity: 0,
      price: 0
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateQuantities = this.updateQuantities.bind(this);
    this.checkoutPrices = this.checkoutPrices.bind(this);
    this.clearCart = this.clearCart.bind(this);
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
    if (this.state.view.name === 'demoStart') {
      return (
        <div className = 'col-12'>
          <Header quantity = {this.state.quantity} added={this.state.added} productListFocus = {this.productListFocus} setView = {this.setView} cart = {this.state.cart} updateQuantities = {this.updateQuantities}/>
          <DemoStart/>
          <Hero productListFocus = {this.productListFocus}/>
          <ProductList productListFocus = {this.productListFocus} addToCart = {this.addToCart} product={this.state.products} setView = {this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'catalog') {
      return (
        <div className = 'col-12'>
          <Header quantity = {this.state.quantity} added={this.state.added} productListFocus = {this.productListFocus} setView = {this.setView} cart = {this.state.cart} updateQuantities = {this.updateQuantities}/>
          <Hero productListFocus = {this.productListFocus}/>
          <ProductList productListFocus = {this.productListFocus} addToCart = {this.addToCart} product={this.state.products} setView = {this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className = 'col-12'>
          <Header quantity = {this.state.quantity} added={this.state.added} setView = {this.setView} cart = {this.state.cart}/>
          <CartSummary checkoutPrices = {this.checkoutPrices} removeItem = {this.removeItem} setView = {this.setView} cart = {this.state.cart} addToCart = {this.addToCart} updateQuantities = {this.updateQuantities}/>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div className = 'col-12'>
          <Header quantity = {this.state.quantity} added={this.state.added} setView = {this.setView} cart = {this.state.cart} updateQuantities = {this.updateQuantities}/>
          <CheckoutForm clearCart={this.clearCart} setView={this.setView} cart = {this.state.cart} handleSubmit = {this.placeOrder} price = {this.state.price}/>
        </div>
      );
    } else if (this.state.view.name === 'demoEnd') {
      return (
        <div className = 'col-12'>
          <Header quantity = {this.state.quantity} added={this.state.added} setView = {this.setView} cart = {this.state.checkoutCart} updateQuantities = {this.updateQuantities}/>
          <DemoEnd buyer={this.state.buyerInfo} cart={this.state.checkoutCart} price={this.state.price}/>
        </div>
      );
    } else {
      return (
        <div className = 'col-12'>
          <Header quantity = {this.state.quantity} added={this.state.added} setView = {this.setView} cart = {this.state.cart} updateQuantities = {this.updateQuantities}/>
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
  addToCart(product, quantity) {
    product.quantity = quantity;
    let tempCart = this.state.cart;
    for (let i = 0; i < tempCart.length; i++) {
      if (tempCart[i].name === product.name) {
        tempCart[i].quantity = quantity;
        this.setState({
          cart: tempCart
        }, () => {
          this.updateQuantities();
        });
        return;
      }
    }
    fetch('api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product, quantity),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(product => {
        this.setState({
          cart: [...this.state.cart, product],
          added: 'Show'
        }, () => {
          this.updateQuantities();
        });
      });
  }
  updateQuantities() {
    if (this.state.cart.length > 0) {
      let tempTotal = 0;
      for (let i = 0; i < this.state.cart.length; i++) {
        tempTotal += this.state.cart[i].quantity;
      }
      this.setState({
        quantity: tempTotal
      });
    }
  }
  removeItem(item) {
    let tempCart = this.state.cart;
    for (let i = 0; i < tempCart.length; i++) {
      if (tempCart[i].name === item.name) {
        tempCart.splice(i, 1);
      }
    }
    this.setState({
      cart: tempCart
    });
  }
  checkoutPrices(total) {
    this.setState({
      price: total
    });
  }
  clearCart(tempCart) {
    this.setState({
      quantity: 0,
      cart: [],
      checkoutCart: tempCart
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
