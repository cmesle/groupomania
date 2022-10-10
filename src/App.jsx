import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './index.css';
/* login components */
import LoginLayout from './components/LoginLayout';
import Login from './pages/Login';
/* posts components */
import PostLayout from './pages/PostLayout/index.jsx';
import Gallery from './pages/Gallery'
import NewPost from './pages/NewPost';
import UpdatePost from './pages/UpdatePost';
import Post from './pages/Post';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';
import PrivateRoutes from './components/PrivateRoutes';



function App() {
  return (
    < Routes >
      <Route path="" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="" element={<PostLayout />}>
          <Route path='gallery' element={<Gallery />} />
          <Route path='newpost' element={<NewPost />} />
          <Route path='updatePost' element={<UpdatePost />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Route>

    </Routes >
  )
}


export default App