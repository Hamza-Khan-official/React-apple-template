import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import Screen_1 from './Components/Screens/Screen_1/Screen_1';
import Screen_2 from './Components/Screens/Screen_2/Screen_2';
import Screen_3 from './Components/Screens/Screen_3/Screen_3';
import Screen_4 from './Components/Screens/Screen_4/Screen_4';
import Screen_5 from './Components/Screens/Screen_5/Screen_5';
import Screen_6 from './Components/Screens/Screen_6/Screen_6';
import Screen_7 from './Components/Screens/Screen_7/Screen_7';
import Screen_8 from './Components/Screens/Screen_8/Screen_8';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Screen_1 />
     <Screen_2 />
     <Screen_3 />
     <Screen_4 />
     <Screen_5 />
     <Screen_6 />
     <Screen_7 />
     <Screen_8 />
    </>
  )
}

export default App
