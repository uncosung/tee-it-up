import React from 'react';

export default class DemoEnd extends React.Component {
  render() {
    return (
      <div className = 'demo-end col-12'>
        <div className = 'row justify-content-center'>
          <h2>Thank you for trying out Tee It Up! E-Commerce Golf Store. This demo is now over. Please note that no personal information has been saved.</h2>
          <button className = 'reload-button btn btn-lg btn-primary' onClick={() => { location.reload(); }}>Reload Page</button>
        </div>
      </div>
    );
  }
}
