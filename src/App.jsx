import './App.css';
import cloudImg from './images/cloud.png';
import errorImg from './images/404.png';
import clearimg from './images/clear.png';
import mistimg from './images/mist.png';
import rainimg from './images/rain.png';
import snowimg from './images/snow.png';

function App() {

  return (
    <div>

      <div className="container">
        <div className="search-box">
          <i className='bx bxs-map'></i>
          <input type="text" placeholder='enter your location'/>
          <button className='bx bx-search'></button>
        </div>

        <div className="weather-box">
          <div className='box'>
            <div className="info-weather">
              <div className="weather">
                <img src={cloudImg}/>
                <p className='temperature'>16<span>°C</span></p>
                <p className="description">Broken Clouds</p>
              </div>
            </div>
          </div>

          <div className="weather-details">
            <div className="humidity">
              <i className='bx bx-water'></i>
              <div className="text">
                <div className="info-humidity">
                  <span>0%</span>
                </div>
                <p>Humidity</p>
              </div>
            </div>

            <div className="wind">
              <i className='bx bx-wind'></i>
              <div className="text">
                <div className="info-wind">
                  <span>0Km/h</span>
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
