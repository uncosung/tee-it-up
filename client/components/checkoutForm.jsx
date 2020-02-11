import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      creditCardCVV: '',
      shippingAddress: '',
      cart: this.props.cart,
      nameValidation: {
        nameValid: 'notEntered',
        nameCheck: ''
      },
      cardValidation: {
        cardValid: 'notEntered',
        cardCheck: ''
      },
      cvvValidation: {
        cvvValid: 'notEntered',
        cvvCheck: ''
      },
      addressValidation: {
        addressValid: 'notEntered',
        addressCheck: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateAddress = this.validateAddress.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateCard = this.validateCard.bind(this);
    this.validateCvv = this.validateCvv.bind(this);
    this.clearCart = this.clearCart.bind(this);
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
        <form autoComplete='new-password'>
          <div className = 'offset-sm-2 col-sm-8 col-12 form-group'>
            <div className = 'input-group mb-3'>
              <div className = 'col-12'>
                <form autoComplete='off'>
                  <input id = 'name' className = {`col-8 form-control ${this.state.nameValidation.nameCheck}`} type='text' placeholder = 'Name On Card' onChange = {this.handleChange} value = {this.state.name}></input>
                  <div id='invalidName' className = {`col-12 ${this.state.nameValidation.nameValid}`}>Please input a valid name.</div>
                </form>
              </div>
            </div>
            <div className = 'input-group mb-3'>
              <div className = 'col-sm-8 col-12 mr-3'>
                <form autoComplete='off'>
                  <input id = 'creditCard' className = {`col-12 form-control ${this.state.cardValidation.cardCheck}`} type='text' placeholder = 'Credit Card Number' onChange = {this.handleChange} value = {this.state.creditCard} maxLength='16'></input>
                  <div id='disclaimer' className='col-12'>For demo purposes only</div>
                  <div id='invalidCard' className = {`col-12 ${this.state.cardValidation.cardValid}`}>Please input a valid card number.</div>
                </form>
              </div>
              <div className = 'col-sm-3 col-12'>
                <form autoComplete='off'>
                  <input id='creditCardCVV' className = {`col-12 form-control ${this.state.cvvValidation.cvvCheck}`} type='text' placeholder = 'CVV' onChange = {this.handleChange} value = {this.state.creditCardCVV}></input>
                  <div id='invalidCvv' className = {`col-12 ${this.state.cvvValidation.cvvValid}`}>Invalid CVV.</div>
                </form>
              </div>
            </div>
            <div className = 'shipping input-group mb-3'>
              <div className = 'col-12'>
                <form autoComplete='off'>
                  <textarea id = 'shippingAddress' className = {`col-12 form-control ${this.state.addressValidation.addressCheck}`} type='text' placeholder = 'Shipping Address' onChange = {this.handleChange} value = {this.state.shippingAddress}></textarea>
                  <div id='invalidAddress' className = {`col-12 ${this.state.addressValidation.addressValid}`}>Please input a valid address.</div>
                </form>
              </div>
            </div>
            <div className = 'submitRow row'>
              <button className = 'btn btn-primary' onClick = {this.backToShop}>Continue Shopping</button>
              <button className = 'placeOrder btn btn-success' type='submit' onClick={this.handleSubmit}>Place Order</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleChange() {
    const target = event.target;
    if (target.id === 'name') {
      this.validateName();
    }
    if (target.id === 'creditCard') {
      this.validateCard();
    }
    if (target.id === 'creditCardCVV') {
      this.validateCvv();
    }
    if (target.id === 'shippingAddress') {
      this.validateAddress();
    }
  }
  validateName() {
    const nameRegex = /^[A-Za-z0-9_ .]*$/;
    const nameLengthRegex = /^[A-Za-z0-9_ .]{5,65}$/;
    const { nameValidation } = this.state;
    if (nameRegex.test(event.target.value)) {
      if (nameLengthRegex.test(event.target.value)) {
        nameValidation.nameValid = 'valid';
      } else {
        nameValidation.nameValid = 'invalid';
      }
      nameValidation.nameCheck = 'verified';
      this.setState({
        name: event.target.value
      });
    } else {
      nameValidation.nameValid = 'invalid';
      nameValidation.nameCheck = 'unverified';
    }
    this.setState({ nameValidation });
  }
  validateCard() {
    const cardRegex = /^[0-9]*$/;
    const cardLengthRegex = /^[0-9]{16}$/;
    const { cardValidation } = this.state;
    if (cardRegex.test(event.target.value)) {
      if (cardLengthRegex.test(event.target.value)) {
        cardValidation.cardValid = 'valid';
      } else {
        cardValidation.cardValid = 'invalid';
      }
      cardValidation.cardCheck = 'verified';
      this.setState({
        creditCard: event.target.value
      });
    } else {
      cardValidation.cardValid = 'invalid';
      cardValidation.cardCheck = 'unverified';
    }
    this.setState({ cardValidation });
  }
  validateCvv() {
    const cvvRegex = /^[0-9]*$/;
    const cvvLengthRegex = /^[0-9]{3,4}$/;
    const { cvvValidation } = this.state;
    if (cvvRegex.test(event.target.value)) {
      if (cvvLengthRegex.test(event.target.value)) {
        cvvValidation.cvvValid = 'valid';
      } else {
        cvvValidation.cvvValid = 'invalid';
      }
      cvvValidation.cvvCheck = 'verified';
      this.setState({
        creditCardCVV: event.target.value
      });
    } else {
      cvvValidation.cvvValid = 'invalid';
      cvvValidation.cvvCheck = 'unverified';
    }
    this.setState({ cvvValidation });
  }
  validateAddress() {
    const addressRegex = /^[A-Za-z0-9_ ,.]*$/;
    const addressLengthRegex = /^[A-Za-z0-9_ ,.]{20,156}$/;
    const { addressValidation } = this.state;
    if (addressRegex.test(event.target.value)) {
      if (addressLengthRegex.test(event.target.value)) {
        addressValidation.addressValid = 'valid';
      }
      addressValidation.addressCheck = 'verified';
      this.setState({
        shippingAddress: event.target.value
      });
    } else {
      addressValidation.addressValid = 'invalid';
      addressValidation.addressCheck = 'unverified';
    }
    this.setState({ addressValidation });
  }
  handleSubmit() {
    event.preventDefault();
    if (this.state.nameValidation.nameValid !== 'valid') {
      this.setState({
        nameValidation: {
          nameValid: 'invalid',
          nameCheck: 'unverified'
        }
      });
    }
    if (this.state.cardValidation.cardValid !== 'valid') {
      this.setState({
        cardValidation: {
          cardValid: 'invalid',
          cardCheck: 'unverified'
        }
      });
    }
    if (this.state.cvvValidation.cvvValid !== 'valid') {
      this.setState({
        cvvValidation: {
          cvvValid: 'invalid',
          cvvCheck: 'unverified'
        }
      });
    }
    if (this.state.addressValidation.addressValid !== 'valid') {
      this.setState({
        addressValidation: {
          addressValid: 'invalid',
          addressCheck: 'unverified'
        }
      });
    } else {
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
      }, () => {
        this.clearCart();
      });
    }
  }
  clearCart() {
    this.props.clearCart(this.state.cart);
  }
  backToShop() {
    this.props.setView('catalog', {});
  }
}
export default CheckoutForm;
