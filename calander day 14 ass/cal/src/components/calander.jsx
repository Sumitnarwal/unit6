import { useState } from "react"
import Calendar from 'react-calendar';

export const Calander = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date)
    }
    return (
        <div>
            <Calendar formatMonth onChange={onChange} value={date} />

        </div>
    )
} 