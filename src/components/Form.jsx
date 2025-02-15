import { useState } from "react";
import Button from "./Button";
import Input from "./Input"; 

export default function Form() {
    const [city, setCity] = useState("");

    function handleChange(event) {
        setCity(event.target.value)
    }

    function handleClick() {
        console.log(city);
    }

    return (
        <div>
            <Input value={city} onChange={handleChange} />
            <Button onClick={handleClick}>
                Get weather
            </Button>
        </div>
    )
}