import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { useSelector } from "react-redux";


export const EditDelail = () => {
    const [city, setCity] = useState("")
    const navigate=useNavigate()
    const coun = useSelector((state) => state.country.singlePro)
   const cityUpdate=()=>{       
       axios({
           url: `https://cartiphone.herokuapp.com/${coun.id}`,
           method: "PUT",
           data:{
             country:`${coun.country}`  ,
             population:`${coun.population}`  ,
            city:city
           }
        }).then((res) => {
            alert(`city change ${coun.city} to ${city}`)
            navigate("/")
        })
    }

    return (
        <div>
          <h3>Update detail</h3>
            Now City name:{coun.city}<input placeholder="Enter New city  Name" onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={cityUpdate}>Change</button>
        </div>
    )
}