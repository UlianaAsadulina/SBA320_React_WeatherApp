import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WiThermometer, WiHumidity, WiStrongWind, WiFog, WiRaindrops } from "react-icons/wi";
import { WiDaySunny,WiDayCloudy, WiDayCloudyHigh, WiCloud, WiRain, WiShowers, WiSnow, WiStormShowers } from "react-icons/wi";
import "./CityPage.css"
import Forecast from "../components/Forecast";
import { useKey } from "../components/KeyContext";


export default function CityPage({ unit }) {
    const [weather, setWeather] = useState();
    const param = useParams();
    const city = param.city;

    // console.log("Param:" + city);


    //function to get icon from react libraries based on weather description
    const getWeatherIcon = (description) => {
        switch (description.toLowerCase()) {
            case "clear sky":
                return <WiDaySunny size={60} />;
            case "few clouds":
                return <WiDayCloudy size={60} />;
            case "scattered clouds":
                return <WiDayCloudyHigh size={60} />;
            case "broken clouds":
                return <WiCloud size={60} />;
            case "shower rain":
                return <WiShowers size={60} />;
            case "rain":
                return <WiRain size={60} />;
            case "thunderstorm":
                return <WiStormShowers size={60} />;
            case "snow":
                return <WiSnow size={60} />;
            case "mist":
                return <WiRaindrops size={60} />;
            case "fog":
                return <WiFog size={60} />;
            default:
                return <WiCloud size={60} />; // Default to cloud icon
        }
    };

    const { key } = useKey(); // Access API key from KeyContext
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`;

    useEffect(() => {
        async function getData() {
            try {
                

                

                const responce = await fetch(url);
                const data = await responce.json();
                console.log(data)
                setWeather(data);

            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, [city, unit])




    return weather ? (
            <div className="weather-container">
                <h1>{weather.name}, {weather.sys.country}</h1>
                <h1>{Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}</h1>
                <div>{getWeatherIcon(weather.weather[0].description)}</div>
                <h3>{weather.weather[0].description}</h3>
                <h3>H: {Math.round(weather.main.temp_max)}° L: {Math.round(weather.main.temp_min)}°</h3>
                <Forecast LAT={weather.coord.lat} LON={weather.coord.lon} unit={unit} /> 
            
                <div className="weather-details">
                    <div className="weather-box">
                        <WiThermometer size={30} />
                        <p>FEELS LIKE</p>
                        <p>{Math.round(weather.main.feels_like)}°</p>
                    </div>
                    <div className="weather-box">
                        <WiHumidity size={30} />
                        <p>HUMIDITY</p>
                        <p>{weather.main.humidity}%</p>
                    </div> 
                </div>
                <div className="weather-details">

                    <div className="weather-box">
                        <WiStrongWind size={30} />
                        <p>WIND</p>
                        <p>{weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}</p>
                    </div>   
                    <div className="weather-box">
                        <WiFog size={30} />
                        <p>VISIBILITY</p>
                        <p>{weather.visibility}</p>
                    </div> 
                </div>
            </div>

        ) : (
            <h1>Loading...</h1>
        );
}

