import React from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";


export default function Login (props) {
	return(
		<>
			<Container>
				<Row className="justify-content-md-center">
					<Col>
						<Form>
							<Form.Group>
								<Form.Label>Ваш Email</Form.Label>
								<Form.Control type={"email"} placeholder={"Enter email"}></Form.Control>
								<Alert variant={"warning"}>Неверно указан email</Alert>
							</Form.Group>
							<Form.Group>
								<Form.Label>Пароль</Form.Label>
								<Form.Control
									onBlur={(e)=>{props.checkPassword(e.target.value)}}
									type={"password"}
									placeholder={"Пароль"}>
								</Form.Control>
								<Alert variant={"warning"}>Пароль должен содержать минимум 8 символов, минимум 1 цифра, минимум 1 спецсимвол, минимум 1 заглавная буква</Alert>
							</Form.Group>
							<Button onClick={()=>{props.checkPassword(123)}} variant={"primary"}>Login</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}