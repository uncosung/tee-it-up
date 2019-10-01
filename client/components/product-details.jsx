import React from 'react';
import Slider from 'react-slick';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.backToList = this.backToList.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.state.product) {
      const product = this.state.product;
      const imgUrl = this.state.product.image;
      const imgArray = this.state.product.extraImages;
      const name = product.name;
      const price = parseFloat(this.state.product.price / 100).toFixed(2);
      const shortDescription = this.state.product.shortDescription;
      const longDescription = this.state.product.longDescription;
      return (
        <div className = 'product-details card col-md-12 col-12'>
          <button className = 'col-2 back-button btn btn-primary' onClick = {this.backToList}>Back to catalog</button>
          <div className = 'product-details-top row'>
            <div className = 'product-details-img-container col-6'>
              <Slider className = 'carousel' {...settings}>
                <img className = 'product-details-img col-12' src={imgUrl}></img>
                <img className = 'product-details-img col-12' src={imgArray[0]}></img>
                <img className = 'product-details-img col-12' src={imgArray[1]}></img>
              </Slider>
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
    } else {
      return <div>Loading...</div>;
    }
  }
  componentDidMount() {
    const id = this.props.params;
    fetch(`/api/products.php?id=${id}`)
      .then(res => res.json())
      .then(product => {
        this.setState({
          product: product[id]
        });
      });
  }
  backToList() {
    this.setState({
      product: null
    }, () => {
      this.props.setView('catalog', {});
    });
  }
  addToCart() {
    this.props.addToCart(this.state.product);
  }
}
export default ProductDetails;
