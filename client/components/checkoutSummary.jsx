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
      <div className = 'cart-item card offset-2 col-8 my-4'>
        <div className = 'cart-item-top row'>
          <div className = 'cart-item-img-container col-5'>
            <img className = 'cart-item-img col-12' src={img}></img>
          </div>
          <div className = 'cart-item-info col-4'>
            <h3 className = 'card-title cart-item-name '>{name}</h3>
            <h4 className = 'cart-item-price '>${this.state.price}</h4>
          </div>
          <div className = 'cart-item-quantity col-3'>
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
