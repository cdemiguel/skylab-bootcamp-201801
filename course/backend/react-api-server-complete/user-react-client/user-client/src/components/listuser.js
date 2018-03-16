import React, { Component } from 'react';

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
            refreshList:'',
            locationName:'',

        }
    }

    componentDidMount() {
        api_client.getList().then(users => {
            this.setState({ users: users })
        })
    }

    /////////
    setlocationName= (locationName) =>{
        this.setState({ locationName })
      }

    listUsers = () => {
        this.setState({ query: '' })
    }

    keepInput = e => this.setState({ query: e.target.value })

    deleteUser = (id) => {
        const users= this.state.users.filter(
            (user) => {
                return user.id != id
            }
        )
        this.setState({users})

    }

    updateUser = (id, username) => {

        const users= this.state.users.filter(
            (user) => {
                // return user.id != id
                if (user.id == id){
                return user.username = username
                }
            }

            // var result = jsObjects.filter(function( obj ) {
            //     return obj.b == 6;
            //   });



        )


        
        this.setState({users})

    }


    render() {

        //const recieveUser = this.state.users.map(user => user)

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
                {/*  */}
                <PrintUsers updateUser={this.updateUser} deleteUser={this.deleteUser}  location={this.state.locationName}  setlocationName ={this.setlocationName} onClickDestination={this.selectDestination} userLists={this.state.users} inputValue={this.state.query} retrieveUser={this.retrieveUser} />

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
                        <InputDelete  deleteUser={props.deleteUser} setlocationName ={props.setlocationName} userID={user.id} />
                        <InputUpdate updateUser={props.updateUser} userID={user.id} />
                    </div>
                )
            }
        </div>
    </section>
}

class InputDelete extends Component {
    constructor(props) {
        super(props)

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
            queryUsername: '',
            queryPassword: '',
            passingId: props.userID,
            locationName: 'saxasxa',
            

        }
    }

    keepInput1 = e => this.setState({ queryUsername: e.target.value })
    keepInput2 = e => this.setState({ queryPassword: e.target.value })

    retrieveUser = () => {
        const href = this.state.passingId

        const { queryUsername, queryPassword } = this.state

        api_client.deleteOne(href, queryUsername, queryPassword)
        .then(()=> this.props.deleteUser(this.state.passingId))
            
        this.setState({ show: false });

    }

    handleHide() {
        this.setState({ show: false });
    }

    ////////
    sendlocationName = () => {
        let locationName = this.state.locationName
        this.props.setlocationName(locationName)
    }


    render() {
        

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
                            <form className="mt-4" onSubmit={e => {
                                this.retrieveUser()
                                this.sendlocationName()
                
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

class InputUpdate extends Component {
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

        const {queryUsername,queryPassword,queryname,querysurname,queryemail,newPassword,newUsername} = this.state

        api_client.updateOne(href, queryUsername, queryPassword, queryname, querysurname, queryemail, newPassword, newUsername)
        .then(()=>this.props.updateUser(this.state.passingId, this.state.newPassword, this.state.newUsername ))
    
    }

    handleHide() {
        this.setState({ show: false });
    }

    render(props) {

        return (
            <div className="modal-action">
                <div className="modal-container" style={{}}>
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
                                <input placeholder="username" onChange={this.keepInput1} type="text" required />
                                <input placeholder="password" onChange={this.keepInput2} type="text" required />
                                <input placeholder="name" onChange={this.keepInput3} type="text" required />
                                <input placeholder="surname" onChange={this.keepInput4} type="text" required />
                                <input placeholder="email" onChange={this.keepInput5} type="text" required />

                                <input placeholder="new password" onChange={this.keepInput6} type="text" required />
                                <input placeholder="new username" onChange={this.keepInput7} type="text" required />

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
