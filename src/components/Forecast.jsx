import { useEffect, useState } from "react";
import { useKey } from "./KeyContext";

export default function Forecast ({ LAT, LON, unit}) {
    // const [coordinats, setCoordinats] = useState({LAT: params.LAT, LON: params.LON});

    const [ intervalForecasts, setForecast] = useState([]);

    const { key } = useKey(); // Access API key from KeyContext



    useEffect(() => {

        //function to fetch 5 day every 3 hours firecast for ciyu coordinats
        async function getForecast() {
            try {
                

                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${key}&units=${unit}`;

                const responce = await fetch(url);
                const data = await responce.json();
                console.log(data)
                setForecast(data.list);

            } catch (e) {
                console.error(e);
            }
        }

        getForecast(); 
    }, [LAT, LON, unit])




    return (
        <div> {intervalForecasts.map((element, index) => (
                    <div key={index} className="weather-box">
                            <p> {element.dt_txt}</p>
                            <h3>{Math.round(element.main.temp)}°{unit === "metric" ? "C" : "F"}</h3>   
                            <h4>{element.weather[0].description}</h4>             

                    </div>
                ))}
        </div>
    )
}