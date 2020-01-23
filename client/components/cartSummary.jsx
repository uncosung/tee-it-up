import React from 'react';
import CartSummaryItem from './cartSummaryItem';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
    this.checkout = this.checkout.bind(this);
  }
  render() {
    const cartItems = this.props.cart.map(item => {
      return (
        <CartSummaryItem key = {item.id} item={item}/>
      );
    });
    const priceArray = this.props.cart.map(item => {
      return (parseFloat(item.price) / 100).toFixed(2);
    });
    let totalPrice = 0;
    for (let i = 0; i < priceArray.length; i++) {
      totalPrice = totalPrice + parseFloat(priceArray[i]);
    }
    if (this.props.cart.length === 0) {
      return (
        <div className = 'cart-list col-12'>
          <button className = 'btn btn-primary' onClick = {this.backToList}>Back to catalog</button>
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
          <h4 className = 'my-4'>Item Total ${totalPrice.toFixed(2)}</h4>
          <button onClick={this.checkout} className = 'mb-4 btn btn-success'>Checkout</button>
        </div>
      );
    }
  }
  checkout() {
    this.props.setView('checkout', {});
  }
  backToList() {
    this.props.setView('catalog', {});
  }
}
export default CartSummary;
