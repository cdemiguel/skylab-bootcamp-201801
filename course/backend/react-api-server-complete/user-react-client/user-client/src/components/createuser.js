import React, { Component } from 'react';
import api_client from './../api-client'

class CreateUser extends Component {
    constructor() {
      super()
      this.state = {
        queryUsername: '',
        queryPassword: '',
        queryname: '',
        querysurname: '',
        queryemail: '',
      }
    }
  
    keepInput1 = e => this.setState({ queryUsername: e.target.value })
    keepInput2 = e => this.setState({ queryPassword: e.target.value })
  
    keepInput3 = e => this.setState({ queryname: e.target.value })
    keepInput4 = e => this.setState({ querysurname: e.target.value })
    keepInput5 = e => this.setState({ queryemail: e.target.value })
  
    createUser = () => {
        let queryUsername = this.state.queryUsername
        let queryPassword = this.state.queryPassword
        let queryname = this.state.queryname
        let querysurname = this.state.querysurname
        let queryemail = this.state.queryemail

        api_client.createOne(queryUsername, queryPassword, queryname, querysurname, queryemail)
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
        </div>
      );
    }
  }
  
  export default CreateUser;