import './App.css';
import cloudImg from './images/cloud.png';
import errorImg from './images/404.png';
import clearimg from './images/clear.png';
import mistimg from './images/mist.png';
import rainimg from './images/rain.png';
import snowimg from './images/snow.png';
import { useState } from 'react';

function App() {
  const APIKey = '';
  const [showWeather, setShowWeather] = useState(null);
  const [city, setCity] = useState();

  async function displayWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`);

    if(response.ok) {
      const weather = await response.json();
      setShowWeather(weather.current);
      console.log(weather);
    }
  }

  return (
    <div>

      <div className="container">
        <div className="search-box">
          <i className='bx bxs-map'></i>
          <input type="text" value={city} onChange={(e) => {setCity(e.target.value)}} placeholder='enter your location'/>
          <button className='bx bx-search' onClick={displayWeather}></button>
        </div>

        <div className="weather-box">
          <div className='box'>
            <div className="info-weather">
              <div className="weather">
                <img src={cloudImg}/>
                <p className='temperature'>{showWeather?.temp_c}<span>°C</span></p>
                <p className="description">{showWeather?.condition.text}</p>
              </div>
            </div>
          </div>

          <div className="weather-details">
            <div className="humidity">
              <i className='bx bx-water'></i>
              <div className="text">
                <div className="info-humidity">
                  <span>{showWeather?.humidity}%</span>
                </div>
                <p>Humidity</p>
              </div>
            </div>

            <div className="wind">
              <i className='bx bx-wind'></i>
              <div className="text">
                <div className="info-wind">
                  <span>{showWeather?.wind_kph}Km/h</span>
                </div>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
