import React from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

class Login extends React.Component{
	state = {
		loginWarning: false,
		passwordWarning: false,
		loginValidation: false,
		passwordValidation: false,
		userDateError: false,
		userLogin: "",
		userPassword: "",
	}

	/*
		Здесь я поступил плохо и загрязнил ui компоненту.
		State не должен был содержать userLogin, userPassword  и функции writeUserLoginAndPassword не должно было быть.
		Информация о вводе логина и пароля должна была хранится в userReducer,
		но у меня почему-то после установки Реакт Роутера начал сбрасываться фокус с инпута,
		когда происходит изменения в редакс стейте (в предыдущем проекте такого не было).
		Поэтому, как временный вариант пришлось хранить информацию в локальном стейте.
	 */
	writeUserLoginAndPassword(value, isLogin){
		if (isLogin) {
			this.setState({userLogin: value})
		} else {
			this.setState({userPassword: value})
		}
	}

	checkLoginInput(value){
		if(!this.props.checkLogin(value)) {
			this.setState({loginWarning: true});
		} else {
			this.setState({
				loginWarning: false,
				loginValidation: true
			});
		}
	}
	checkPasswordInput(value){
		if(!this.props.checkPassword(value)) {
			this.setState({ passwordWarning: true } );
		} else {
			this.setState({
				passwordWarning: false,
				passwordValidation: true
			})
		}
	}
	checkLoginAndPasswordInBase(){
		if (this.props.checkDateWithUsers(this.state.userLogin, this.state.userPassword)){
			this.setState({userPassword: "",loginValidation: false, passwordValidation: false, userDateError: false});
		}else{
			this.setState({userDateError: true});
		}
	}


	render(){
		return(
			<>
				<Container>
					<Row className="justify-content-md-center">
						<Col>
							<Form>
								<Form.Group>
									<Form.Label>Ваш Email</Form.Label>

									<Form.Control
										onChange={(e)=>{this.writeUserLoginAndPassword(e.target.value, true)}}
										onFocus={()=>{this.setState({loginWarning: false})}}
										onBlur={(e)=>{this.checkLoginInput(e.target.value)}}
										value={this.state.userLogin}
										placeholder={"Enter email"}></Form.Control>
									{this.state.loginWarning
										? <Alert variant={"warning"}>Email имеет неверный формат</Alert>
										: false}

								</Form.Group>
								<Form.Group>
									<Form.Label>Пароль</Form.Label>
									<Form.Control
										onChange={(e)=>{this.writeUserLoginAndPassword(e.target.value, false)}}
										onFocus={()=>{this.setState({passwordWarning: false})}}
										onBlur={(e)=>{this.checkPasswordInput(e.target.value)}}
										value={this.state.userPassword}
										type={"password"}
										placeholder={"Пароль"}>
									</Form.Control>
									{this.state.passwordWarning
										? <Alert variant={"warning"}>Пароль должен содержать минимум 8 символов, минимум 1 цифра, минимум 1 спецсимвол, минимум 1 заглавная буква</Alert>
										: false }
								</Form.Group>
								<Button
									onClick={()=>{this.checkLoginAndPasswordInBase()}}
									variant={"primary"}>Login</Button>
								{this.state.userDateError
									? <Alert variant={"warning"}>Неверно введен email или пароль</Alert>
									: false}
							</Form>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}
export default Login;