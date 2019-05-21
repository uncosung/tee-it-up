import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    const productId = this.props.product.id;
    const imgUrl = this.props.product.image;
    const name = this.props.product.name;
    const price = parseFloat(this.props.product.price / 100).toFixed(2);
    const shortDescription = this.props.product.shortDescription;
    return (
      <div onClick = {() => this.props.setView(name, productId)} className = 'product-item card col-md-3 col-12 mx-4 my-4 py-4'>
        <div className = ' card-img-top'>
          <img className = 'product-img' src={imgUrl}></img>
        </div>
        <div className = 'product-info card-body'>
          <h3 className = 'card-title'>{name}</h3>
          <div>${price}</div>
          <div>{shortDescription}</div>
        </div>
      </div>
    );
  }
}
