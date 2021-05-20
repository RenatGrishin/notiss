import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {editEnteredLogin, editEnteredPassword, login} from "../../store/actions/authAction";

const checkPassword =(password)=>{
	if(!password.match(/\d/)
		|| !password.match(/\W/)
		|| !password.match(/[a-z]/)
		|| !password.match(/[A-Z]/)
		|| password.length < 8 ){
		return false;
	}
	return true;
};

const checkLogin =(value)=>{
	if(!value.match(/[@]/)) return false;
	return true;
}

const checkDateWithUsers =(login, password, users, logIn)=>{
	for(let key of users){
		if( key.login.toUpperCase() === login.toUpperCase() && key.password === password ){
			logIn();
			return true;
		}
	}
	return false;
}

const loginPage =(props)=>{
	return <Login
		auth={props.auth}
		users={props.users}
		checkPassword={checkPassword}
		checkLogin={checkLogin}
		checkDateWithUsers={checkDateWithUsers}
		login={props.login}
		editEnteredLogin={props.editEnteredLogin}
		editEnteredPassword={props.editEnteredPassword}
	/>
};

function  mapStateToProps(state) {
	return {
		auth: state.auth,
		users: state.users
	}
};

const LoginContainer = connect(mapStateToProps, {
	checkPassword, checkLogin, editEnteredLogin, editEnteredPassword, checkDateWithUsers, login})(loginPage);
export default LoginContainer;