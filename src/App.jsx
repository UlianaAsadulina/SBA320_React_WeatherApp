import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import CityNav from './components/CityNav'
import Form from './components/Form'


function App() {

  const [unit, setUnit] = useState("metric"); // Default is metric

    // Function to toggle units
    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
    };

  return (
    <>
      <div className="title-container">
        <h1>Weather App</h1>
        <div className="unit-toggle-container">
          <label className="switch">
            <input type="checkbox" onChange={toggleUnit} checked={unit === "imperial"} />
            <span className="slider"></span>
          </label>
          <span className="unit-label">
            {unit === "metric" ? "°C, m/s" : "°F, mph"}
          </span>
        </div>
      </div>
      
      <div className='mainContainer'>
        <div className="leftContainer">
          <Form unit={unit} />
          <CityNav />
          
        </div>
        <div className='rightContainer'>
          <Routes>              
              <Route path="/" element={<MainPage unit={unit}/>} />
              <Route path="/:city" element={<CityPage unit={unit}/>} />                
            </Routes>
        </div>
      </div>
      
      
    </>
  )
}

export default App
