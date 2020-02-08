import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  render() {
    const products = this.props.product.map(product => {
      return <ProductListItem addToCart = {this.props.addToCart} setView = {this.props.setView} key = {product.id} product = {product}/>;
    });

    return (
      <div ref={this.props.productListFocus} className = 'col-12 product-list'>
        <div className = 'row justify-content-center'>
          {products}
        </div>
      </div>
    );

  }
}
