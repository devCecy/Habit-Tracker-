import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i className="navbar-logo fas fa-leaf"/>
        <span>Habbit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;