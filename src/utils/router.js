import React, { Component } from 'react';
import { 
  Route, 
  BrowserRouter, 
  Link, 
  Redirect, 
  Switch 
} from 'react-router-dom'
import { auth, provider } from '../utils/firebase';

import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import Profile from '../containers/Profile/Profile';

function PrivateRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Redirect to='/profile' />
        : <Component {...props} />}
    />
  )
}

class Router extends Component {

  constructor(){
    super();
    this.state = {
      authenticated: false,
      loading: true
    }
  }

  componentDidMount () {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* nav bar goes here */}
          <div className="container">
            { this.state.loading === true ?
              <h1></h1> : 
              <div className="row">
                <Switch>
                  <Route path='/' exact component={Home} />
                  <PublicRoute authenticated={this.state.authenticated} path='/login' component={Login} />
                  <PrivateRoute authenticated={this.state.authenticated} path='/profile' component={Profile} />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
              </div>
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;