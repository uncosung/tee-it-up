import React from 'react';
import CartSummaryItem from './cartSummaryItem';

export default class DemoEnd extends React.Component {
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
    return (
      <div className = 'cart-list col-12'>
        <h2>Thank you for trying out Tee It Up! E-Commerce Golf Store. This demo is now over. Please note that no personal information has been saved.</h2>
        <button className = 'mt-2 reload-button btn btn-lg btn-primary' onClick={() => { location.reload(); }}>Reload Page</button>
        <h3 className = 'mt-2'>Order Confirmation</h3>
        <div>{cartItems}</div>
        <h4 className = 'my-4'>Item Total ${totalPrice.toFixed(2)}</h4>
        <h4 className = 'mt-2'>Shipping Information</h4>
        <h5>Name : {this.props.buyer.name}</h5>
        <h5>Address : {this.props.buyer.shippingAddress}</h5>
      </div>
    );
  }
}
