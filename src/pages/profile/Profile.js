import React from "react";
import {Card, ListGroup} from "react-bootstrap";

export default function Profile(props){
	return(<>
			<h2>Профиль пользователя</h2>
		<Card>
			<Card.Body>
				<Card.Title>{props.user.name}</Card.Title>
				<Card.Subtitle>id: {props.user.id}</Card.Subtitle>
			</Card.Body>
			<ListGroup>
				<ListGroup.Item>Логин: {props.user.login}</ListGroup.Item>
				<ListGroup.Item>Пароль: {props.user.password}</ListGroup.Item>
			</ListGroup>
		</Card></>
	);
}