import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/sign-up' element={<SignUp/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
