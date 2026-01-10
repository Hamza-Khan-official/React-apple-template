import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Login_ from './Components/Form/Login/Login_.jsx';
import Sign_UP_ from './Components/Form/SignUP/Sign_UP_.jsx';
import All_Compo from './Components/All_Components_Call.jsx';

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path='/React-apple-template/login' Component={Login_}></Route>
        <Route path='/React-apple-template' Component={All_Compo}></Route>
        <Route path='React-apple-template/signup' Component={Sign_UP_}></Route>
      </Routes>

      {/* Screens */}
     
    </>
  )
}

export default App
