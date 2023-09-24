import img from "../image/weather.png"
function Aside({ data }) {




    let d = new Date();

    return data !== undefined ? <div className="aside">
        <h5>Now</h5>
        <div className="weather">
            <div className="weather-info">
                <h1 id="temperature">{Math.floor(data.main.feels_like - 273)}</h1><sup>O</sup>
                <h1>C</h1>
            </div>
            <div className="weather-img">
                <img id="weather-img" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="..." />
            </div>
        </div>
        <p id="description" >{data.weather[0].description}</p>
        <div className="line"></div>
        <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <h3 id="loc-name">{data.name}</h3>
            <h3 id="country">{data.sys.country}</h3>
        </div>
        <div className="location">
            <i className="fa-regular fa-clock"></i>
            <h3 id="loc-time">{new Date(d.getTime() + d.getTimezoneOffset() + data.timezone).toLocaleString().split(",")[1]}</h3>
        </div>
        <div className="location">
            <i className="fa-solid fa-calendar-days"></i>
            <h3 id="loc-date">{new Date(d.getTime() + d.getTimezoneOffset() + data.timezone).toDateString()}</h3>
        </div>
    </div > : <></>;
}

export default Aside;