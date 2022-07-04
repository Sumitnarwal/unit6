
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editCountry, fetchCountry, handleSplice } from "../redux/action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
export const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const deleteCityid = useSelector((state) => state.country.singlePro)
    const [sort, setSort] = useState("asc")
    const [country,setCountry]=useState("")
    const [poppu,setPoplu]=useState("")
    
    useEffect(() => {
        dispatch(fetchCountry(sort))
    }, [sort])
    const coun = useSelector((state) => state.country.country)
    //console.log(coun)
         
    const handleDelete = (id) => {
        dispatch(handleSplice(id))
        dispatch(fetchCountry(sort))
    }

    const handleEdit = (id) => {
        dispatch(editCountry(id))
      //  console.log(id,"id")
        navigate("/edit")
    }


    const deletCity=(id)=>{
        dispatch(editCountry(id))
        setCountry(deleteCityid.country)
        setPoplu(deleteCityid.population)
        console.log(country,poppu)
        axios({
            url: `https://cartiphone.herokuapp.com/${id}`,
            method: "PATCH",
            data:{
             city:""
            }
         }).then((res) => {
         //    alert(`city change ${coun.city} to ${city}`)
         dispatch(fetchCountry(sort))
         })
    }
    return (
        <div id="countDiv">
<h2>DATA</h2>
        <table>
        
        <tr>
        <th>id</th>
        <th>Country</th>
        <th>City</th>
        <th>Population</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        {coun.map((it, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{it.country}</td>
                        <td>{it.city} {"  "} <button disabled={it.city===""} onClick={()=>deletCity(it.id)}> Delete</button></td>
                        <td>{it.population}</td>
                        <td><button onClick={() => handleEdit(it.id)}>Edit </button></td>
                        <td><button onClick={() => handleDelete(it.id)}>Delete</button></td>

                    </tr>
                    ))
                    }
                </table>
            <button onClick={() => navigate("./add")}>Add New Country</button>
            <button onClick={() => setSort("desc")}>Population high To Low</button>
            <button onClick={() => setSort("asc")}>Population low To high</button>
        </div>
    )

}