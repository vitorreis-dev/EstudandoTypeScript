import { useState } from 'react'
import './App.css'

function App() {

  const [red,setRed] = useState([])
  const [green,setGreen] = useState([])
  const [blue,setBlue] = useState([])

  return (
    <section>
      <label htmlFor="red">R</label>
      <input type="number" name="" id="red" min={0} max={255} />
    </section>
  )
}

export default App
