import React from 'react';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productListFocus: this.props.productListFocus
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    if (this.state.productListFocus.current) {
      this.state.productListFocus.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }
  render() {
    return (
      <div className="row hero">
        <div className="hero-image">
          <div className="hero-title">Tee It Up! Golf Store
            <div className=" row d-flex justify-content-center">
              <button className="hero-button btn btn-md btn-light mt-3" onClick={this.clickHandler}>SEE CATALOG</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
