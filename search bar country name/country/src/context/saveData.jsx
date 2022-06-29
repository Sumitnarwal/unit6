import { createContext, useState } from "react";


export const saveData=createContext()

export const SaveDataProvider=({children})=>{
    const [country,setCountry]=useState([])
    const hansdleSetcountry=(value)=>{
        setCountry(value)
    }
    return(
        <saveData.Provider value={{hansdleSetcountry,country}}>{children}</saveData.Provider>
    )
}