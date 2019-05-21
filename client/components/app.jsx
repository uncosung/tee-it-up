import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className = 'col-12'>
          <Header/>
          <ProductList product={this.state.products} setView = {this.setView}/>
        </div>
      );
    } else {
      return (
        <div className = 'col-12'>
          <Header/>
          <ProductDetails backToList = {this.backToList} key={this.state.view.id} params={this.state.view.params} setView = {this.setView}/>
        </div>
      );
    }

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
  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

}
