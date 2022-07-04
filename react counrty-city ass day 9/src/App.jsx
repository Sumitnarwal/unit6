import { useCallback, useState } from 'react'
import './App.css'
import axios from "axios"
import { Link, Route, Routes } from 'react-router-dom'


import { Detail } from './components/detailPage'
import { Home } from './components/home'
import { AddCountry } from './components/addCountry'
import { EditDelail } from './components/editDetail'
function App() {


  return (<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/detail' element={<Detail/>}/>
  <Route path='/add' element={<AddCountry/>}/>
  <Route path='/edit' element={<EditDelail/>}/>
  </Routes>
    
    
  )
}

export default App
