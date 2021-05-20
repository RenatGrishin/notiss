import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Col, Container, Nav, Row} from 'react-bootstrap';
import {logout} from "./store/actions/authAction";
import MainPage from "./pages/mainPage/MainPage";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import LoginContainer from "./pages/login/LoginContainer";
import React from "react";
import ProfileContainer from "./pages/profile/ProfileContainer";

function App(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Nav>
              <Button variant="link"><Link to={"/"}>Главная</Link></Button>
                <Button variant="link"><Link to={"/profile"}>Профиль</Link></Button>
            </Nav>
          </Col>
          <Col>
            {props.store.getState().auth.isAuth ?
              <Button onClick={()=>{props.store.dispatch(logout())}} variant="link">Logout</Button> :
              <Button variant="link"><Link to={"/login"}>Login</Link></Button>}
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route exact path={"/"} component={()=><MainPage/>}/>
              <Route path={"/profile"}>{
                !props.store.getState().auth.isAuth
                  ? <Redirect to="/login" />
                  : <ProfileContainer/>
              }</Route>
              <Route path={"/login"}>{
                props.store.getState().auth.isAuth
                  ? <Redirect to="/profile" />
                  : <LoginContainer/>
              }</Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
