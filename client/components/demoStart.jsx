import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class DemoStart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: true
    };
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  render() {
    const modalStyle = {
      top: '15vh'
    };
    return (
      <Modal style={modalStyle} show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>This site is for demo purposes only. No personal or payment information will be stored.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
                            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
