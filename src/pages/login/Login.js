import React from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

class Login extends React.Component{
	state = {
		loginWarning: false,
		passwordWarning: false,
		loginValidation: false,
		passwordValidation: false
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
										onFocus={()=>{this.setState({loginWarning: false})}}
										onBlur={(e)=>{this.checkLoginInput(e.target.value)}}
										type={"email"}
										placeholder={"Enter email"}></Form.Control>
									{this.state.loginWarning
										? <Alert variant={"warning"}>Email имеет неверный формат</Alert>
										: false}

								</Form.Group>
								<Form.Group>
									<Form.Label>Пароль</Form.Label>
									<Form.Control
										onFocus={()=>{this.setState({passwordWarning: false})}}
										onBlur={(e)=>{this.checkPasswordInput(e.target.value)}}
										type={"password"}
										placeholder={"Пароль"}>
									</Form.Control>
									{this.state.passwordWarning
										? <Alert variant={"warning"}>Пароль должен содержать минимум 8 символов, минимум 1 цифра, минимум 1 спецсимвол, минимум 1 заглавная буква</Alert>
										: false }
								</Form.Group>
								<Button onClick={()=>{this.props.checkPassword(123)}} variant={"primary"}>Login</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}
export default Login;