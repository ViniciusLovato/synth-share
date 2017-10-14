import React, { Component } from 'react';

import './LoginForm.css';

class LoginForm extends Component {

  render(){
    return(
      <div>
        <div className="login-form">
          <p className="control">
            <input className="input email-input" type="text" placeholder="email@example.org"/>
          </p>
          <p className="control">
            <input className="input password-input" type="password" placeholder="●●●●●●●"/>
          </p>
          <p className="control">
            <button className="button  is-outlined is-large is-fullwidth login-button">Login</button>
          </p>
        </div>
        <div className="forgot-password">
          <p className="has-text-centered">
            <a href="">Forgot password</a>
          </p>
        </div>
      </div>
    ); 
  }
}

export default LoginForm;