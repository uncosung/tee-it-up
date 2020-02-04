import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      show: false,
      quantity: this.props.quantity,
      price: parseFloat(this.props.item.price / 100 * this.props.quantity).toFixed(2)
    };
  }
  render() {
    const img = this.props.item.image;
    const name = this.props.item.name;
    const shortDescription = this.props.item.shortDescription;
    const modalStyle = {
      top: '15vh'
    };
    return (
      <div className = 'cart-item card offset-2 col-8 my-4'>
        <Modal style={modalStyle} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notice</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove this item from your cart?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.removeItem}>
                Remove
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
                Return to Cart
            </Button>
          </Modal.Footer>
        </Modal>
        <div className = 'cart-item-top row'>
          <div className = 'cart-item-img-container col-5'>
            <img className = 'cart-item-img col-12' src={img}></img>
          </div>
          <div className = 'cart-item-info col-4'>
            <h3 className = 'card-title cart-item-name '>{name}</h3>
            <h4 className = 'cart-item-price '>${this.state.price}</h4>
            <div className = 'cart-item-short '>{shortDescription}</div>
          </div>
          <div className = 'cart-item-quantity col-3'>
            <h5 className = 'quantity'>
              <i className="fas fa-minus-square pointer-hover mr-2" onClick={this.decrementQuantity}/>
              {this.state.quantity}
              <i className="fas fa-plus-square pointer-hover ml-2" onClick={this.incrementQuantity}/>
              <br/>
              <Button className = 'danger' onClick={this.handleOpen}>Remove</Button>
            </h5>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.updatePrices(this.state.price);
  }
  incrementQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
      price: parseFloat(this.props.item.price / 100 * (this.state.quantity + 1)).toFixed(2)
    }, () => {
      this.props.addToCart(this.props.item, this.state.quantity);
      this.props.updatePrices(this.state.price);
    });
  }
  decrementQuantity() {
    if (this.state.quantity === 1) {
      return;
    }
    this.setState({
      quantity: this.state.quantity - 1,
      price: parseFloat(this.props.item.price / 100 * (this.state.quantity - 1)).toFixed(2)
    }, () => {
      this.props.addToCart(this.props.item, this.state.quantity);
      this.props.updatePrices(this.state.price);
    });
  }
  removeItem() {
    this.props.removeItem(this.props.item);
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
}
export default CartSummaryItem;
