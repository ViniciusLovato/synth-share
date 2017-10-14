import React, { Component } from 'react';
import { auth, provider } from '../../utils/firebase'; 

import './GoogleLoginForm.css';


class GoogleLoginForm extends Component {

  constructor(){
    super();

    this.login = this.login.bind(this);
  }
  
  login(){
    auth.signInWithPopup(provider)
    .catch(err =>{
      console.log('Error login in')
    })
  }

  render(){
    return(
        <div onClick={this.login} id="google-login"></div>   
    ); 
  }
}

export default GoogleLoginForm;