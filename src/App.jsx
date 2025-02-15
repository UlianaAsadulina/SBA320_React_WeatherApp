import { Routes, Route } from 'react-router-dom'

import './App.css'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import CityNav from './components/CityNav'
import Form from './components/Form'


function App() {
  


  return (
    <>
      <h1>Weather App</h1>
      <div className='mainContainer'>
        <div className="leftContainer">
          <Form />
          <CityNav />
          
        </div>
        <div className='rightContainer'>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/:city" element={<CityPage />} />  
            </Routes>
        </div>
      </div>
      
      
    </>
  )
}

export default App
