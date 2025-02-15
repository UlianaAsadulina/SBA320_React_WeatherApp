import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function CityPage() {
    const [weather, setWeather] = useState();
    const param = useParams();
    const city = param.city;

    console.log("Param:" + city);


    useEffect(() => {
        async function getData() {
            try {
                const key = import.meta.env.VITE_API_KEY;

                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

                const responce = await fetch(url);
                const data = await responce.json();
                console.log(data)
                setWeather(data);

            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, [city])




    return city ? (
            <div>
                <h1>{city} Weather Page</h1>
                
            </div>

        ) : (
            <h1>Loading...</h1>
        );
}

