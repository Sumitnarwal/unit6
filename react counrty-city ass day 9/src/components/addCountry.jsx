import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const AddCountry = () => {
    const navigate=useNavigate()
    const [cont, setCountry] = useState("")
    const [cit, setCity] = useState("")
    const [pop, setPop] = useState("")
    //    const [form,setForm]=useState({
    //     id:coun.length+1,
    //     population:pop,
    //     country:cont,
    //     city:cit
    //    })
    const handleAdd = () => {
        axios({
            url: "https://cartiphone.herokuapp.com/countrys",
            method: "POST",
            data: {
                population: pop,
                city: cit,
                country: cont
            }
        }).then((r)=>{
         console.log(r.data)
         alert("country added")
         navigate("/")
        })
    }
    return (
        <div>
        <h2>ADD COUNTRY</h2>
            <input type={"text"} placeholder="Enter Country" onChange={(e) => setCountry(e.target.value)} /><br />
            <input type={"text"} required placeholder="Enter city" onChange={(e) => setCity(e.target.value)} /><br />
            <input type={"number"} required placeholder="Enter Population" onChange={(e) => setPop(e.target.value)} /><br />
            <button onClick={handleAdd}>ADD </button>
               
        </div>
    )
}