import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/sign-up' element={<SignUp/>} />
        <Route exact path='/posts/post/:id' element={<PostDetails/>} />

      </Routes>
    </div>
  )
}

export default App
