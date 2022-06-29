
import axios from 'axios';
import { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { saveData } from './context/saveData';

export const Home=()=>{
    const [search,setSearch]=useState([])
    const {hansdleSetcountry}=useContext(saveData)
//const [data,setData]=useState([])
//console.log(data)
const debounce=(fn)=>{
  let timer;
  return function(...args){
    const context=this;
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      timer=null
      fn.apply(context,args)
    },500)
  }
}

const handleSearch=(event)=>{
const {value}=event.target

//http://localhost:8080/countrys
//https://demo.dataverse.org/api/search?q=${value}

// fetch(`https://demo.dataverse.org/api/search?q=${value}`)
// .then(res=>res.json())
// .then(json=>setSearch(json.data.items));


axios({
    url:"http://localhost:8080/countrys",
    method:"GET",
    params:{
      q:value,
      _limit:5

    }
  }).then((res)=>{
          setSearch(res.data)
          console.log(res.data)
    })
    
  }
  const optimiserVerson= useCallback(debounce(handleSearch),[])
    return(
        <div className="App">
        <h1>Find your Country</h1>
        <input placeholder='Enter Country name' onChange={optimiserVerson} id="inp" />
        {search?.length>0 && 
        <div id='countrydata'>
        {search?.map((el,i)=> <div key={i}>
        <Link to={"/detail"} onClick={()=>hansdleSetcountry(el)}>
        <p id='countryname'>{el.country}</p>
        </Link>
          </div>)}</div>
        }
        </div>
        
      )
    
}