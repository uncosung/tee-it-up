import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity
    };
  }
  render() {
    return (
      <nav className = 'header navbar navbar-expand-lg navbar-dark shadow fixed-top'>
        <div>
          <a className = 'navbar-brand logo' href="#" onClick={() => { this.props.setView('catalog', {}); }}>
            <span>
              <i className="fas fa-golf-ball"></i>
            </span>
                    TEE IT UP!
          </a>
        </div>
        <div onClick = {() => { this.props.setView('cart', {}); }}className = 'cart-container'>
          <div className = 'mx-1'>{this.props.quantity} items</div>
          <span>
            <i className="cart fas fa-shopping-cart"></i>
          </span>
          <div className="cartConfirmationContainer">
            <div className={'cartConfirmation' + this.props.added}>Added to Cart</div>
          </div>
        </div>
      </nav>
    );
  }
}
