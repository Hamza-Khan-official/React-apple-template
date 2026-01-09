import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Login_ from './Components/Form/Login/Login_.jsx';
import Sign_UP_ from './Components/Form/SignUP/Sign_UP_.jsx';

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path='/React-apple-template/Login' Component={Login_}></Route>
        <Route path='/React-apple-template' Component={Sign_UP_}></Route>
      </Routes>

      {/* Screens */}
     
    </>
  )
}

export default App
