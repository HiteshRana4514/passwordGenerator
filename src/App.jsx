import { useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wrapper/>
    </>
  )
}

export default App
