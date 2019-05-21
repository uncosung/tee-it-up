import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    const img = this.props.item.image;
    const name = this.props.item.name;
    const shortDescription = this.props.item.shortDescription;
    const price = parseFloat(this.props.item.price / 100).toFixed(2);
    return (
      <div className = 'cart-item card offset-2 col-8 my-4'>
        <div className = 'cart-item-top row'>
          <div className = 'cart-item-img-container col-6'>
            <img className = 'cart-item-img col-12' src={img}></img>
          </div>
          <div className = 'cart-item-info col-6'>
            <h3 className = 'card-title cart-item-name '>{name}</h3>
            <h4 className = 'cart-item-price '>${price}</h4>
            <div className = 'cart-item-short '>{shortDescription}</div>
          </div>
        </div>
      </div>
    );

  }
}
export default CartSummaryItem;
