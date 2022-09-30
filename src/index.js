import React from 'react';

// import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import './index.css';
import LoginLayout from './components/LoginLayout';
import Login from './pages/Login';
// import reportWebVitals from './reportWebVitals';
import PostLayout from './pages/PostLayout/index.jsx';
import Gallery from './pages/Gallery'
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';
import { PTUContextProvider } from './utils/context';


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
    <BrowserRouter>
      <PTUContextProvider>
        <GlobalStyle />
        <Routes>
          <Route path="" element={<LoginLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="" element={<PostLayout />}>
            <Route path='gallery' element={<Gallery />} />
            <Route path="newpost" element={<NewPost />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="*" element={<NoPage />} />
          </Route>

        </Routes>
      </PTUContextProvider>
    </BrowserRouter>
  </React.StrictMode >
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
