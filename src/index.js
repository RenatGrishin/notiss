import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter} from "react-router-dom";

const rerenderReactDOM =(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
  reportWebVitals();
}

rerenderReactDOM();
store.subscribe(()=>{rerenderReactDOM()});

