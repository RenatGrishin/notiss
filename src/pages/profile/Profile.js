import React from "react";
import {Card, ListGroup} from "react-bootstrap";

export default function Profile(props){
	return(<>
			<h2>Профиль пользователя</h2>
		<Card>
			<Card.Body>
				<Card.Title>Имя</Card.Title>
				<Card.Subtitle>id: </Card.Subtitle>
			</Card.Body>
			<ListGroup>
				<ListGroup.Item>Логин: </ListGroup.Item>
				<ListGroup.Item>Пароль: </ListGroup.Item>
			</ListGroup>
		</Card></>
	);
}