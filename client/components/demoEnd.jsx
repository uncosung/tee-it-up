import React from 'react';
import CheckoutSummary from './checkoutSummary';

export default class DemoEnd extends React.Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
  }
  render() {
    const cartItems = this.props.cart.map(item => {
      return (
        <CheckoutSummary key = {item.id} item={item} price={this.props.price}/>
      );
    });
    return (
      <div className = 'cart-list col-12'>
        <h3>Thank you for trying out Tee It Up! E-Commerce Golf Store. This demo is now over. Please note that no personal information has been saved.</h3>
        <button className = 'mt-2 reload-button btn btn-lg btn-primary' onClick={this.backToList}>Continue Shopping</button>
        <h3 className = 'mt-2'>Order Confirmation</h3>
        <div>{cartItems}</div>
        <h4 className = 'my-4'>Item Total ${this.props.price}</h4>
        <h4 className = 'mt-2'>Shipping Information</h4>
        <h5>Name : {this.props.buyer.name}</h5>
        <h5>Address : {this.props.buyer.shippingAddress}</h5>
      </div>
    );
  }
  backToList() {
    this.props.setView('catalog', {});
  }
}
