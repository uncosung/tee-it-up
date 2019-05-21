import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.backToList = this.backToList.bind(this);
  }
  render() {
    if (this.state.product) {
      const imgUrl = this.state.product.image;
      const name = this.state.product.name;
      const price = parseFloat(this.state.product.price / 100).toFixed(2);
      const shortDescription = this.state.product.shortDescription;
      const longDescription = this.state.product.longDescription;
      const catalog = '< Back to catalog';
      return (
        <div className = 'product-details card col-md-12 col-12'>
          <div onClick = {this.backToList} className = 'back-button'>{catalog}</div>
          <div className = 'product-details-top row'>
            <div className = 'product-details-img-container col-6'>
              <img className = 'product-details-img col-12' src={imgUrl}></img>
            </div>
            <div className = 'product-details-info col-6'>
              <h3 className = 'card-title product-details-name '>{name}</h3>
              <h4 className = 'product-details-price '>${price}</h4>
              <div className = 'product-details-short '>{shortDescription}</div>
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
          product: product
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
}
export default ProductDetails;
