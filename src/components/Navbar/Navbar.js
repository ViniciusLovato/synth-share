import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

class Navbar extends Component {

  render(){
    <header>
      <div className="wrapper">
        <h1>Synth Share!</h1>
        {this.props.user ?
          <button onClick={this.props.logout}>Logout</button>                
        :
          <button onClick={this.props.login}>Log In</button>              
        }
      </div>
    </header>
  }
}

Navbar.propTypes = propTypes;

export default Navbar;
