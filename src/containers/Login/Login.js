import React, { Component } from 'react';

import firebase, { auth, provider } from '../../utils/firebase.js';
import './Login.css';


const propTypes = {

}

class Login extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }

    this.login = this.login.bind(this);
  }

  login(){
    auth.signInWithPopup(provider)
      .then(result => {
        this.setState({user: result.user});
      })
      .catch(err =>{
        console.log('Error login in')
      })
  }

  render(){
    return(
      <div>
        {/* <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Password"/>
          </div>
        </div> */}
        <div>


        </div>

        <div className="field">
          <div className="control">
            <div>
              <button onClick={this.login} className="button is-primary" >Sign in with Google</button>
            </div>
          </div>
        </div>


        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Sign in</button>
          </div>
          <div className="control">
            <button className="button is-link">Sign up</button>
          </div>
        </div>
      </div>
    ); 
  }
}

Login.propTypes = propTypes;
export default Login;