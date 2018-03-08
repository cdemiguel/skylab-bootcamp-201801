import React, { Component } from 'react';
// import react-router
import { Route, HashRouter, NavLink } from 'react-router-dom'

import './App.css';
import api_client from './api-client'



import CreateUser from './components/createuser';
import ListUser from './components/listuser';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {


    return (
      <div className="container input-container mt-5">
        <div className="row header-container">
        <div className="col-sm-6">
        <HashRouter>
            <NavLink to='/' className="button">List of users</NavLink>
            </HashRouter>
        </div>
        <div className="col-sm-6">
        <HashRouter>
          <NavLink to='/update-user' className="button">Create Users</NavLink>
          </HashRouter>
        </div>
        </div>
      <HashRouter>
          <div>
          <Route exact path="/" render={() => (
              <ListUser  />
          )} />
          <Route exact path="/update-user" render={() => (
              <CreateUser  />
            )} />
          </div>
      </HashRouter>
      </div>
    );
  }
}




export default App;
