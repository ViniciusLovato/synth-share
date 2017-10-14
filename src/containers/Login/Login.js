import React, { Component } from 'react';

import logo from '../../assets/images/logo.png';

import './Login.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import GoogleLoginForm from '../../components/GoogleLoginForm/GoogleLoginForm';

class Login extends Component {

  render(){
    return(
      <div className="columns is-gapless">
        <div className="column is-4">
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h1 className=" has-text-centered logo">       
                      <img src={logo} alt="application logo" width="200px"/>
                    </h1>
                    <LoginForm/>
                    <div className="has-text-centered">
                      <br/>
                      <GoogleLoginForm/>           
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        </div>
        <div className="column is-8">
          <div className="hero-banner">
            <section className="hero is-fullheight is-success">
              <div className="hero-body">
                <div className="container section">
                  <div className="has-text-right">
                    <h1 className="title is-1">Login</h1> <br/>
                    <p className="title is-3">Secure User Account Login</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Login;