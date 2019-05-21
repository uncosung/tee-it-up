import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav className = 'navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top'>
        <div>
          <a className = 'navbar-brand logo' href="#">
            <span>
              <i className="far fa-angry"></i>
            </span>
                    Wicked Sales
          </a>
        </div>
        <div className = 'cart-container'>
          <div className = 'mx-1'>{this.props.cartItemCount} items</div>
          <span>
            <i className="cart fas fa-shopping-cart"></i>
          </span>
        </div>
      </nav>
    );
  }
}
