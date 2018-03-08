import React, { Component } from 'react';
// import react-router
import { Route, HashRouter } from 'react-router-dom'

import './../App.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import api_client from './../api-client'


class ListUser extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      query: '',
    }
  }

  componentDidMount() {
    api_client.getList().then(users => {
      this.setState({ users: users })
    })
  }

  listUsers = () => {
    this.setState({ query: '' })
  }

  keepInput = e => this.setState({ query: e.target.value })

  render() {

    const recieveUser = this.state.users.map(user => user)

    return (
      <div className="container input-container mt-5">
        <div className="row justify-content-center ">
          <div id="wrap">
            <div className="center">
              <div id="search">
                <form onSubmit={e => {
                  e.preventDefault()
                  this.listUsers()
                }}>
                  <span className="ac ac-hidden" />
                  <input onChange={this.keepInput} value={this.state.query} className="search-bar" type="text" placeholder="e.g : cdemiguel" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <PrintUsers userLists={recieveUser} inputValue={this.state.query} retrieveUser={this.retrieveUser} />

      </div>
    );
  }
}

// Printing Users Function
function PrintUsers(props) {

  let filteredContacts = props.userLists.filter(
    (user) => {
      return user.username.indexOf(props.inputValue) !== -1
    }
  )

  return <section className="section-list">
    <div className="row mt-3">
      {
        filteredContacts.map((user, index) =>
          <div key={index} className="col-sm-12 no-gutter">
            <div className="col-sm-12 subsection-list pt-3 pb-3">
              <p><span>username:</span>{user.username}
                <span className="float-right subsection-list-buttons">
                  {/* <a href="" data-user={user.id} onClick={props.retrieveUser}>Delete</a> */}
                </span>
              </p>
              <hr />
              <div className="row">
                <div className="col-sm-4">
                  <p><span>name:</span>{user.name}
                  </p>
                </div>
                <div className="col-sm-4">
                  <p><span>surname:</span>{user.surname}</p>
                </div>
                <div className="col-sm-4">
                  <p><span>email:</span>{user.email}</p>
                </div>
              </div>
            </div>
            <div>

            </div>
            <InputDelete userID={user.id} />
              <InputUpdate userID={user.id} />
          </div>

        )
      }
    </div>
  </section>
}

class InputUpdate extends Component {
  constructor(props) {
    super(props)

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      queryUsername: '',
      queryPassword: '',
      passingId: props.userID
    }
  }

  keepInput1 = e => this.setState({ queryUsername: e.target.value })
  keepInput2 = e => this.setState({ queryPassword: e.target.value })

  retrieveUser = () => {
    let href = this.state.passingId
    let queryUsername = this.state.queryUsername
    let queryPassword = this.state.queryPassword
    api_client.deleteOne(href, queryUsername, queryPassword)
  }

  handleHide() {
    this.setState({ show: false });
  }

  render(props) {

    return (
      <div className="modal-action">
        <div className="modal-container">
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
            Delete User
          </Button>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Delete user
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="mt-4" onSubmit={() => {
                this.retrieveUser()
              }}>
                <input placeholder="username" onChange={this.keepInput1} type="text" />
                <input placeholder="password" onChange={this.keepInput2} type="text" />
                <input type="submit" href="" />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }

}

class InputDelete extends Component {
  constructor(props) {
    super(props)

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      queryUsername: '',
      queryPassword: '',
      queryname: '',
      querysurname: '',
      queryemail: '',
      newPassword: '',
      newUsername: '',


      passingId: props.userID
    }
  }

  keepInput1 = e => this.setState({ queryUsername: e.target.value })
  keepInput2 = e => this.setState({ queryPassword: e.target.value })

  keepInput3 = e => this.setState({ queryname: e.target.value })
  keepInput4 = e => this.setState({ querysurname: e.target.value })
  keepInput5 = e => this.setState({ queryemail: e.target.value })

  keepInput6 = e => this.setState({ newPassword: e.target.value })
  keepInput7 = e => this.setState({ newUsername: e.target.value })

  retrieveUser = () => {
    let href = this.state.passingId

    let queryUsername = this.state.queryUsername
    let queryPassword = this.state.queryPassword
    let queryname = this.state.queryname
    let querysurname = this.state.querysurname
    let queryemail = this.state.queryemail
    let newPassword = this.state.newPassword
    let newUsername = this.state.newUsername

    api_client.updateOne(href, queryUsername, queryPassword, queryname, querysurname, queryemail, newPassword, newUsername)
  }


  handleHide() {
    this.setState({ show: false });
  }

  render(props) {

    return (
      <div className="modal-action">
        <div className="modal-container" style={{  }}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
            Update User
          </Button>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
              Update user
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="mt-4" onSubmit={() => {
                this.retrieveUser()
              }}>
                <input placeholder="username" onChange={this.keepInput1} type="text" required/>
                <input placeholder="password" onChange={this.keepInput2} type="text" required/>
                <input placeholder="name" onChange={this.keepInput3} type="text" required/>
                <input placeholder="surname" onChange={this.keepInput4} type="text" required/>
                <input placeholder="email" onChange={this.keepInput5} type="text" required/>

                <input placeholder="new password" onChange={this.keepInput6} type="text" required/>
                <input placeholder="new username" onChange={this.keepInput7} type="text" required/>

                <input type="submit" href="" />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }

}



export default ListUser;
