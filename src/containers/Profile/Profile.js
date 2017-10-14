import React, { Component } from 'react';
import { auth } from '../../utils/firebase';

class Profile extends Component {

  constructor(){
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut().then(result => {

    })
    .catch(err => {

    })
  }


  render(){
    return(
      <div>
        <button onClick={this.logout}>Sign out</button>

      </div>
    );
  }
}

export default Profile;