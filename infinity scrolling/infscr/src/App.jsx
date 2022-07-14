import axios from 'axios';
import { useEffect, useState } from 'react'

import './App.css'
//import { Scroll } from './component/scrole';

//https://api.instantwebtools.net/v1/passenger?page=${page}&size=6
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(10)
   
  useEffect(() => {
   loadmorePokemon()
    window.addEventListener("scroll", handleScroll)
  }, [page])

  const handleScroll = (e) => {
    // console.log("top",e.target.documentElement.scrollTop)
    // console.log("win",window.innerHeight)
    // console.log("heigth",e.target.documentElement.scrollHeight)
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
    //  loadmorePokemon()
    setPage(page+1)
    }
  }


  const loadmorePokemon = () => {
   axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`).then((res) => {
      const newPokemon = []
      res.data.results.forEach((p) => newPokemon.push(p.name))
      setPokemon(oldPokemon=>[...oldPokemon,...newPokemon])
      
    })
    
  }

  return (

    <div className="App">
      {pokemon.map((el, i) => {
        return <div className='divpok' key={i}>{i + 1}.{el}</div>
      })}
    </div>
  )

}
export default App

