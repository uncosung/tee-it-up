import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav className = 'navbar navbar-expand-lg navbar-light bg-light shadow fixed-top'>
        <div>
          <a className = 'navbar-brand logo' href="#">
            <span>
              <i className="far fa-angry"></i>
            </span>
                    Wicked Sales
          </a>
        </div>
      </nav>
    );
  }
}
