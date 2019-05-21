import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <div className = 'col-12'>
        <Header/>
        <ProductList product={this.state.products}/>
      </div>
    );
  }
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(products => {
        this.setState({
          products: products
        });
      });
  }

}
