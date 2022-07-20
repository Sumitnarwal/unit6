import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Calander } from './components/calander'

import Cal  from './components/materCalander'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calander/>
    </div>
  )
}

export default App
