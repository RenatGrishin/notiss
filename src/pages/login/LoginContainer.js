import React from "react";
import {connect} from "react-redux";
import Login from "./Login";

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

const login =(props)=>{
	return <Login
		login={props.login}
		checkPassword={checkPassword}
		checkLogin={checkLogin}
	/>
};

function  mapStateToProps(state) {
	return {
		auth: state.auth,
		users: state.users
	}
};

const LoginContainer = connect(mapStateToProps, {login, checkPassword, checkLogin})(login);
export default LoginContainer;