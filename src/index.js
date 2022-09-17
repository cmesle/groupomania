import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import './index.css';
import Header from './components/Header'
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import NewPost from './pages/NewPost';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
#root {
  flex-grow: 1;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/newpost'>
          <NewPost />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
