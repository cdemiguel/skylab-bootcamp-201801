import React, { Component } from 'react';
import api_client from './../api-client'

import ShowmesOK from './showmesok';
import ShowmesKO from './showmesko';

class CreateUser extends Component {
    constructor() {
      super()
      this.state = {
        queryUsername: '',
        queryPassword: '',
        queryname: '',
        querysurname: '',
        queryemail: '',
        showmessageOK: false,
        showmessageKO: false
      }
    }
  
    keepInput1 = e => this.setState({ queryUsername: e.target.value })
    keepInput2 = e => this.setState({ queryPassword: e.target.value })
    keepInput3 = e => this.setState({ queryname: e.target.value })
    keepInput4 = e => this.setState({ querysurname: e.target.value })
    keepInput5 = e => this.setState({ queryemail: e.target.value })
  
    createUser = () => {
        // sin destructuring
        // let queryemail = this.state.queryemail
        // con destructuring
        const {queryUsername, queryPassword, queryname, querysurname, queryemail} = this.state

        api_client.createOne(queryUsername, queryPassword, queryname, querysurname, queryemail)

        .then(res => {
            if(res.data.status === 'OK') {

              this.setState({ showmessageOK: true })

              setTimeout(() => {
                this.setState({ showmessageOK: false })
              }, 2000);

            } else {

              this.setState({ showmessageKO: true })

              setTimeout(() => {
              }, 2000);

            }
        }
        )
    }

    render() {
      return (
        <div className="container input-container mt-5">
        <form className="mt-4" onSubmit={() => {
                this.createUser()
              }}>
                <input placeholder="username" onChange={this.keepInput1} type="text" required/>
                <input placeholder="password" onChange={this.keepInput2} type="text" required/>
                <input placeholder="name" onChange={this.keepInput3} type="text" required/>
                <input placeholder="surname" onChange={this.keepInput4} type="text" required/>
                <input placeholder="email" onChange={this.keepInput5} type="text" required/>
                <input type="submit" href="" value="create user" />
              </form>

              {(this.state.showmessageOK) ?
              <ShowmesOK /> 
              : null
              }
              
              {(this.state.showmessageKO) ?
              <ShowmesKO />
              : null
              }
              
        </div>
      );
    }
  }
  
  export default CreateUser;