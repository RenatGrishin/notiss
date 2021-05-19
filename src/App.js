import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Card, Col, Container, ListGroup, Nav, Row} from 'react-bootstrap';
import {login, logout} from "./store/actions/authAction";
import MainPage from "./pages/mainPage/MainPage";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import LoginContainer from "./pages/login/LoginContainer";

function App(props) {
  console.log(props.store.getState().auth.isAuth)
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
              <Route path={"/profile"} component={()=><Profile/>}/>
              <Route path={"/login"} component={()=><LoginContainer/>}/>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
