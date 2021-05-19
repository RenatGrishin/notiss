import React from "react";
import {connect} from "react-redux";
import Login from "./Login";

const checkPassword =(password)=>{
	let errorMessage = "Пароль должен содержать минимум 8 символов, минимум 1 цифра, минимум 1 спецсимвол, минимум 1 заглавная буква";

	if(!password.match(/\d/)
		|| !password.match(/\W/)
		|| !password.match(/[a-z]/)
		|| !password.match(/[A-Z]/)
		|| password.length < 8 ){
		console.log(errorMessage)
	}

	console.log(password)
};

const login =(props)=>{
	return <Login
		login={props.login}
		checkPassword={checkPassword}
	/>
};

function  mapStateToProps(state) {
	return {
		auth: state.auth,
		users: state.users
	}
};
/*
function mapDispatchToProps(dispatch){
	return{
		login: ()=>{return dispatch(login())},
		checkPassword: ()=>{return checkPassword()}
	}
}*/

const LoginContainer = connect(mapStateToProps, {login, checkPassword})(login);
export default LoginContainer;