import React from 'react';
import CartSummaryItem from './cartSummaryItem';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
  }
  render() {
    const cartItems = this.props.cart.map(item => {
      return (
        <CartSummaryItem key = {item.id} item={item}/>
      );
    });
    const catalog = '< Back to catalog';
    const priceArray = this.props.cart.map(item => {
      return (parseFloat(item.price) / 100).toFixed(2);
    });
    let totalPrice = 0;
    for (let i = 0; i < priceArray.length; i++) {
      totalPrice = totalPrice + parseFloat(priceArray[i]);
    }
    return (
      <div className = 'cart-list col-12'>
        <div onClick = {this.backToList}>{catalog}</div>
        <h3>My Cart</h3>
        <div>{cartItems}</div>
        <h4 className = 'my-4'>Item Total ${totalPrice.toFixed(2)}</h4>
      </div>
    );
  }
  backToList() {
    this.props.setView('catalog', {});
  }
}
export default CartSummary;
