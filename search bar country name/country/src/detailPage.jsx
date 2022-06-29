import { useContext } from "react"
import { saveData } from "./context/saveData"


export const Detail = () => {
    const { country } = useContext(saveData)
    console.log(country)
    return (
        <div id="det">
            Country : {country.country}<br/>
            Capital : {country.city}
        </div>
    )
}