import React, { Component } from "react";
import { connect } from 'react-redux';
import UsersList from './userList';
import { getUsers, addUser } from '../actions/actionsUsers';


class User extends Component {
  constructor(props) {
		super(props);
	}


  addUser() {
		this.props.dispatch({type: "ADD_USER", newUser: {id: 5, name: "Test", role: "user"}})
	}
	render() {
    console.log(this.props)
		return(
      
			<div>
          <UsersList users={this.props.users}  />
          <button onClick={this.addUser.bind(this)}>Click me </button>
      </div>
      
		);
	}
} 


const mapStateToProps = function(store) {
	return {
		users : store.usersReducer.users,
	};
};


export default connect(
  mapStateToProps,
)(User);

