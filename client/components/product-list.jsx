import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  render() {
    const products = this.props.product.map(product => {
      return <ProductListItem setView = {this.props.setView} key = {product.id} product = {product}/>;
    });

    return (
      <div className = 'col-12 product-list'>
        <div className = 'row justify-content-center'>
          {products}
        </div>
      </div>
    );

  }
}
