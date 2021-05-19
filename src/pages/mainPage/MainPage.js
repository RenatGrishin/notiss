import React from "react";
import {Card, ListGroup} from "react-bootstrap";

export default function MainPage(props){
	return(
		<Card>
			<Card.Body>
				<Card.Title>Тестовое задание для ООО НОТИССИМУС</Card.Title>
				<Card.Subtitle>Автор: Гришин Ренат</Card.Subtitle>
				<Card.Text>Мои контакты:</Card.Text>
				<Card.Text>Тел: +79656221665</Card.Text>
				<Card.Text> E-Mail: cynvox@gmail.com</Card.Text>
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
