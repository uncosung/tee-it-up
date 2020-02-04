import React from 'react';
import CartSummaryItem from './cartSummaryItem';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
    this.checkout = this.checkout.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
    this.checkoutPrices = this.checkoutPrices.bind(this);
    this.state = {
      price: 0
    };
  }
  render() {
    const cartItems = this.props.cart.map(item => {
      return (
        <CartSummaryItem removeItem={this.props.removeItem} addToCart={this.props.addToCart} updatePrices={this.updatePrices} key = {item.id} item = {item} quantity = {item.quantity} />
      );
    });
    const totalCartPrice = this.props.cart.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
    const totalPrice = (parseFloat(totalCartPrice / 100)).toFixed(2);
    if (this.props.cart.length === 0) {
      return (
        <div className = 'cart-list col-12'>
          <button id='emptyCartButton' className = 'btn btn-primary' onClick = {this.backToList}>Back to catalog</button>
          <h3>My Cart</h3>
          <div>You have no items in your cart.</div>
        </div>
      );
    } else {
      return (
        <div className = 'cart-list col-12'>
          <button className = 'mt-2 btn btn-primary' onClick = {this.backToList}>Back to catalog</button>
          <h3 className = 'mt-2'>My Cart</h3>
          <div>{cartItems}</div>
          <h4 className = 'my-4'>Item Total ${totalPrice}</h4>
          <button onClick={this.checkout} className = 'mb-4 btn btn-success'>Checkout</button>
        </div>
      );
    }
  }
  updatePrices() {
    // const priceArray = this.props.cart.map(item => {
    //   return (parseFloat(item.price) / 100).toFixed(2);
    // });
    // let totalPrice = 0;
    // for (let i = 0; i < priceArray.length; i++) {
    //   totalPrice = totalPrice + parseFloat(priceArray[i]);
    // }
    const totalCartPrice = this.props.cart.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
    const totalPrice = (parseFloat(totalCartPrice / 100)).toFixed(2);
    this.setState({
      price: totalPrice
    }, () => {
      this.checkoutPrices(totalPrice);
    });
  }
  checkoutPrices(price) {
    this.props.checkoutPrices(price);
  }
  checkout() {
    this.props.setView('checkout', {});
  }
  backToList() {
    this.props.setView('catalog', {});
  }
}
export default CartSummary;
