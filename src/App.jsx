import React from 'react';

// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

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


function App() {
  return (
    < Routes >
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

    </Routes >
  )
}


export default App
