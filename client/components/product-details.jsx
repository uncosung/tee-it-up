import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: false
    };
    this.backToList = this.backToList.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.checkout = this.checkout.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
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
      const modalStyle = {
        top: '15vh'
      };
      return (
        <div className = 'product-details card col-md-12 col-12'>

          <Modal style={modalStyle} show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='row align-items-center my-1'>
                <img className = 'product-details-img offset-2 col-8' src={imgUrl}></img>
                <div className = 'col-7'>
                  <h5>{name}</h5>
                  <h5>${price}</h5>
                  <h5>Quantity: {this.state.quantity}</h5>
                </div>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.checkout}>
                  Checkout
              </Button>
              <Button variant="secondary" onClick={this.backToList}>
                  Continue Shopping
              </Button>
            </Modal.Footer>
          </Modal>

          <button className = 'col-2 back-button btn btn-primary' onClick = {this.backToList}>Back to catalog</button>
          <div className = 'product-details-top row'>
            <div className = 'product-details-img-container col-6'>
              <Slider className = 'carousel' {...settings}>
                <img className = 'product-details-img offset-2 col-8' src={imgUrl}></img>
                <img className = 'product-details-img offset-2 col-8' src={imgArray[0]}></img>
                <img className = 'product-details-img offset-2 col-8' src={imgArray[1]}></img>
              </Slider>
            </div>
            <div className = 'product-details-info col-6'>
              <h3 className = 'card-title product-details-name '>{name}</h3>
              <h4 className = 'product-details-price '>${price}</h4>
              <div className = 'product-details-short '>{shortDescription}</div>
              <div className = 'col-12'>
                <br/>
                <h5 className = 'col-9'>
                  <i className="fas fa-minus-square pointer-hover mr-2" onClick={this.decrementQuantity}></i>
                Quantity: {this.state.quantity}
                  <i className="fas fa-plus-square pointer-hover ml-2" onClick={this.incrementQuantity}></i>
                </h5>
                <button onClick = {this.addToCart} className = 'cart-button btn btn-success my-5'>Add to Cart</button>
              </div>
              <div className = 'product-details-long'>{longDescription}</div>
            </div>
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
    this.props.addToCart(this.state.product, this.state.quantity);
    this.handleOpen();
  }
  checkout() {
    this.props.setView('cart', {});
  }
  handleOpen() {
    this.setState({
      show: true
    });
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  incrementQuantity() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }
  decrementQuantity() {
    if (this.state.quantity === 1) {
      return;
    }
    this.setState({
      quantity: this.state.quantity - 1
    });
  }
}
export default ProductDetails;
