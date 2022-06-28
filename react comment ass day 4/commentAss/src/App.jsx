
import './App.css'
import { Comments } from './components/comments'
import { Data } from './data/data'

function App() {
  
  return (
    <div className="App">
    <Comments data={Data}/>
    </div>
  )
}

export default App
