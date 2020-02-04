import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      creditCardCVV: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToShop = this.backToShop.bind(this);
  }

  render() {
    let total = parseFloat(this.props.price).toFixed(2);
    return (
      <div className = 'col-12 my-5'>
        <div className = 'checkout-top offset-2 col-8 row'>
          <h2 className = 'col-12'>Checkout</h2>
          <h3 className = 'col-12 my-3'>Order Total: ${total}</h3>
        </div>
        <div className = 'offset-2 col-8 form-group'>
          <form onSubmit = {this.handleSubmit}>
            <div className = 'input-group mb-3'>
              <input id = 'name' className = 'col-8 form-control' type='text' placeholder = 'Name On Card' onChange = {this.handleChange} value = {this.state.name}></input>
            </div>
            <div className = 'input-group mb-3'>
              <input id = 'creditCard' className = 'col-8 form-control' type='text' placeholder = 'Credit Card Number (DEMO PURPOSES ONLY)' onChange = {this.handleChange} value = {this.state.creditCard}></input>
              <input id='creditCardCVV' className = 'offset-1 col-3 form-control' type='text' placeholder = 'CVV' onChange = {this.handleChange} value = {this.state.creditCardCVV}></input>
            </div>
            <div className = 'shipping input-group mb-3'>
              <textarea id = 'shippingAddress' className = 'col-12 form-control' type='text' placeholder = 'Shipping Address' onChange = {this.handleChange} value = {this.state.shippingAddress}></textarea>
            </div>
            <div className = 'submitRow row'>
              <button className = 'btn btn-primary' onClick = {this.backToShop}>Continue Shopping</button>
              <button className = 'placeOrder btn btn-success' type='submit'>Place Order</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleChange() {
    const target = event.target;
    if (target.id === 'name') {
      this.setState({
        name: target.value
      });
    }
    if (target.id === 'creditCard') {
      this.setState({
        creditCard: target.value
      });
    }
    if (target.id === 'creditCardCVV') {
      this.setState({
        creditCardCVV: target.value
      });
    }
    if (target.id === 'shippingAddress') {
      this.setState({
        shippingAddress: target.value
      });
    }
  }
  handleSubmit() {
    event.preventDefault();
    const order = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      creditCardCVV: this.state.creditCardCVV,
      shippingAddress: this.state.shippingAddress
    };
    this.props.handleSubmit(order);
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }
  backToShop() {
    this.props.setView('catalog', {});
  }
}
export default CheckoutForm;
