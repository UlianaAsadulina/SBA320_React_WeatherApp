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




    return weather ? (
            <div>
                <h1>{weather.name}, {weather.sys.country}</h1>
                <h1>{Math.round(weather.main.temp)}°C</h1>
                <h3>{weather.weather[0].description}</h3>
                <h3></h3>
                <h3>H: {Math.round(weather.main.temp_max)}°   L: {Math.round(weather.main.temp_min)}°</h3>
                <div >
                    <div>
                        <p>FEELS LIKE</p>
                        <p>{Math.round(weather.main.feels_like)}°</p>
                    </div>
                    <div>
                        <p>HUMIDITY</p>
                        <p>{weather.main.humidity}%</p>
                    </div> 
                    <div>
                        <p>WIND</p>
                        <p>{weather.wind.speed} m/s</p>
                    </div>   
                    <div>
                        <p>VISIBILITY</p>
                        <p>{weather.visibility}</p>
                    </div> 
                </div>
              
              
                
                
            </div>

        ) : (
            <h1>Loading...</h1>
        );
}

