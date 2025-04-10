import { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className ='App' >
    <header>Your Projects</header>
    <Sidebar ></Sidebar>
   </div>
  )
}

export default App
