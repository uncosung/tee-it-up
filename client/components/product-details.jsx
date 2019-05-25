import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.backToList = this.backToList.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  render() {
    if (this.state.product) {
      const product = this.state.product;
      const imgUrl = this.state.product.image;
      const name = product.name;
      const price = parseFloat(this.state.product.price / 100).toFixed(2);
      const shortDescription = this.state.product.shortDescription;
      const longDescription = this.state.product.longDescription;
      return (
        <div className = 'product-details card col-md-12 col-12'>
          <button className = 'col-2 back-button btn btn-primary' onClick = {this.backToList}>Back to catalog</button>
          <div className = 'product-details-top row'>
            <div className = 'product-details-img-container col-6'>
              <img className = 'product-details-img col-12' src={imgUrl}></img>
            </div>
            <div className = 'product-details-info col-6'>
              <h3 className = 'card-title product-details-name '>{name}</h3>
              <h4 className = 'product-details-price '>${price}</h4>
              <div className = 'product-details-short '>{shortDescription}</div>
              <button onClick = {this.addToCart} className = 'cart-button btn btn-primary my-5'>Add to Cart</button>
            </div>
          </div>
          <div className = 'product-details-bottom card-body'>
            <div className = 'product-details-long'>{longDescription}</div>
          </div>
        </div>
      );
    }
  }
  componentDidMount() {
    const id = this.props.params;
    fetch(`/api/products.php?id=${id}`)
      .then(res => res.json())
      .then(product => {
        this.setState({
          product: product[0]
        });
      });
  }
  backToList() {
    this.setState({
      product: {}
    }, () => {
      this.props.setView('catalog', {});
    });
  }
  addToCart() {
    this.props.addToCart(this.state.product);
  }
}
export default ProductDetails;
