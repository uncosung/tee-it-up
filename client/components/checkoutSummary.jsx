import React from 'react';
class CheckoutSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
      price: parseFloat(this.props.item.price / 100 * this.props.item.quantity).toFixed(2)
    };
  }
  render() {
    const img = this.props.item.image;
    const name = this.props.item.name;
    return (
      <div className = 'cart-item card offset-sm-2 col-sm-8 col-12 my-4'>
        <div className = 'cart-item-top row'>
          <div className = 'cart-item-img-container col-sm-5 col-12'>
            <img className = 'cart-item-img col-12' src={img}></img>
          </div>
          <div className = 'cart-item-info col-sm-4 col-12'>
            <h3 className = 'card-title cart-item-name '>{name}</h3>
            <h4 className = 'cart-item-price '>${this.state.price}</h4>
          </div>
          <div className = 'cart-item-quantity col-sm-3 col-12'>
            <h5 className = 'quantity'>
              Quantity: {this.state.quantity}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutSummary;
