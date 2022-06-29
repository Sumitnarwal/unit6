import { useCallback, useState } from 'react'
import './App.css'
import axios from "axios"
import { Link, Route, Routes } from 'react-router-dom'
import { Detail } from './detailPage'
import { Home } from './homePage'
function App() {


  return (<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/detail' element={<Detail/>}/>
  </Routes>
    
    
  )
}

export default App
