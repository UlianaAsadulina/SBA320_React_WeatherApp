import { WiDaySunny, WiDayCloudy, WiDayCloudyHigh, WiCloud, WiRain, WiShowers, WiSnow, WiStormShowers, WiFog, WiRaindrops } from "react-icons/wi";
//function to get icon from react libraries based on weather description
export default function GetWeatherIcon  ({ description })  {
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
            case "light rain":
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
}