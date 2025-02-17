import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; //for search icon
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
            <ul className="city-list" >
                {list.map((element, index) => (
                    <li key={index} className="city-item">
                        <Link to={`/${element.name}`} className="city-link"> 
                            {element.name}, {element.state}, {element.country}
                        </Link>                        
                    </li>
                ))}
            </ul>


        );
    };

    // Function for when data doesn't exist.
    const loading = () => {
        return <p className="not-found-message">City not found. Please enter a valid name.</p>;
    };

    //   // If data exists, run the loaded function; otherwise, run loading.
    //   return data ? loaded() : loading();

    return (
        <div className="form-container">
            <div className="input-wrapper">
            <Input value={city} onChange={handleChange} placeholder="Enter city name..." 
                    className="input-field"/>
            <Button onClick={getList} className="search-button">            
                <FaSearch size={18} />                
            </Button>
            </div>
            {list ? loaded() : loading() }

        </div>
    )
}