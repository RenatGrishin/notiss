import React from "react";
import {Alert, Card, ListGroup} from "react-bootstrap";

export default function MainPage(props){
	return(
		<Card>
			<Card.Body>
				<Card.Title>Тестовое задание от <b>ООО НОТИССИМУС</b></Card.Title>
				<Card.Subtitle>Автор: Гришин Ренат</Card.Subtitle>
				<Card.Text>Мои контакты:<br/>
					Тел: +79656221665 <br/>
					E-Mail: cynvox@gmail.com</Card.Text>
				<Alert variant={"success"}>Логин: test@mail.ru<br/> Пароль: !1Qwerty</Alert>
			</Card.Body>
			<Card.Header>Стек технологий</Card.Header>
			<ListGroup>
				<ListGroup.Item>React</ListGroup.Item>
				<ListGroup.Item>Redux</ListGroup.Item>
				<ListGroup.Item>React Router</ListGroup.Item>
				<ListGroup.Item>React-Bootstrap</ListGroup.Item>
			</ListGroup>
		</Card>
	)
}
