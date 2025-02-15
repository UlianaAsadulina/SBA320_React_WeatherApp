import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
    //State to hold entered city name
    const [city, setCity] = useState("");

    function handleChange(event) {
        setCity(event.target.value)
    }

    //State to hold list of cities
    const [list, setList] = useState();


    const key = import.meta.env.VITE_API_KEY;


    // Function to fetch data.
    async function getList() {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`);
            const data = await response.json();
            console.log(data)
            setList(data);
        } catch (e) {
            console.error(e)
        }
    };


    const loaded = () => {
        return (
            <ol >
                {list.map((element, index) => (
                    <li key={index}>
                        <Link to={`/${element.name}`}> 
                            {element.name}, {element.state}, {element.country}
                        </Link>                        
                    </li>
                ))}
            </ol>


        );
    };

    // Function for when data doesn't exist.
    const loading = () => {
        return <p>City not founded. Enter valid name in the field above</p>;
    };

    //   // If data exists, run the loaded function; otherwise, run loading.
    //   return data ? loaded() : loading();

    return (
        <div>
            <Input value={city} onChange={handleChange} />
            <Button onClick={getList}>
                 search
            </Button>
            {list ? loaded() : loading() }

        </div>
    )
}