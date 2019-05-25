import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToShop = this.backToShop.bind(this);
  }

  render() {
    const priceArray = this.props.cart.map(item => {
      return (parseFloat(item.price) / 100).toFixed(2);
    });
    let totalPrice = 0;
    for (let i = 0; i < priceArray.length; i++) {
      totalPrice = totalPrice + parseFloat(priceArray[i]);
    }
    return (
      <div className = 'col-12 my-5'>
        <div className = 'checkout-top offset-2 col-8 row'>
          <h2 className = 'col-12'>Checkout</h2>
          <h3 className = 'col-12 my-3'>Order Total: ${totalPrice.toFixed(2)}</h3>
        </div>
        <div className = 'offset-2 col-8 form-group'>
          <form onSubmit = {this.handleSubmit}>
            <div className = 'input-group mb-3'>
              <input id = 'name' className = 'col-12 form-control' type='text' placeholder = 'Name' onChange = {this.handleChange} value = {this.state.name}></input>
            </div>
            <div className = 'input-group mb-3'>
              <input id = 'creditCard' className = 'col-12 form-control' type='text' placeholder = 'Credit Card' onChange = {this.handleChange} value = {this.state.creditCard}></input>
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
