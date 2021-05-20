import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {editEnteredLogin, editEnteredPassword, login} from "../../store/actions/authAction";

class loginPage extends React.Component{
	checkPassword (password){
		if(!password.match(/\d/)
			|| !password.match(/\W/)
			|| !password.match(/[a-z]/)
			|| !password.match(/[A-Z]/)
			|| password.length < 8 ){
			return false;
		}
		return true;
	};

	checkLogin (value){
		if(!value.match(/[@]/)) return false;
		return true;
	}
	checkDateWithUsers (login, password){
		for(let key of this.users){
			if( key.login.toUpperCase().trim() === login.toUpperCase().trim() && key.password === password ){
				this.login(key.id);
				return true;
			}
		}
		return false;
	}

	render (){
		return <Login
			auth={this.props.auth}
			users={this.props.users}
			checkPassword={this.checkPassword}
			checkLogin={this.checkLogin}
			checkDateWithUsers={this.checkDateWithUsers}
			editEnteredLogin={this.props.editEnteredLogin}
			editEnteredPassword={this.props.editEnteredPassword}
			login={this.props.login}
		/>
	};
}


function  mapStateToProps(state) {
	return {
		auth: state.auth,
		users: state.users
	}
};

const LoginContainer = connect(mapStateToProps, {
	editEnteredLogin, editEnteredPassword, login})(loginPage);
export default LoginContainer;