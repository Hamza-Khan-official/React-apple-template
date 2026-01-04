import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import Screen_1 from './Components/Screens/Screen_1/Screen_1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Screen_1 />
    </>
  )
}

export default App
