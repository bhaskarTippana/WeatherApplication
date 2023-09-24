import Footer from "./footer";
import Loading from "./loading";
function Container({ data }) {

    function timeMaker(ms) {
        var date = new Date(ms * 1000); // multiply by 1000 because Date() requires miliseconds
        var timeStr = date.toTimeString().split(' ')[0];
        return timeStr;
    }

    return data !== undefined ? < div className="content-wraper" >
        <h3>Today's Hightlights</h3>
        <div className="content">
            <div className="humidity" title="Wind-Speed">
                <p>wind</p>
                <div className="pressure-details">
                    <i className="fa-solid fa-wind"></i>
                    <div className="meter-box">
                        <h3 id="wind-speed">{data.wind.speed}</h3><span>Kmps</span>
                    </div>
                </div>
            </div>
            <div className="humidity" title="Humidity">
                <p>humidity</p>
                <div className="pressure-details">
                    <i className="fa-solid fa-temperature-low" ></i>
                    <div className="meter-box">
                        <h3 id="humidity">{data.main.humidity}%</h3>
                    </div>
                </div>
            </div>
            <div className="humidity" title="Pressure">
                <p>pressure</p>
                <div className="pressure-details">
                    <i className="fa-solid fa-water"></i>
                    <div className="meter-box">
                        <h3 id="pressure">{data.main.pressure / 1000}</h3>
                        <h4> Bar</h4>
                    </div>
                </div>
            </div>
            <div className="humidity" title="Visibility">
                <p>visibility</p>
                <div className="pressure-details">
                    <i className="fa-solid fa-eye" ></i>
                    <div className="meter-box">
                        <h3 id="visibility">{data.visibility}</h3>
                    </div>
                </div>
            </div>
            <div className="humidity" title="Sunrise">
                <p>sun_set</p>
                <div className="pressure-details">
                    <i className="fa-solid fa-sun" ></i>
                    <div className="meter-box">
                        <h3 id="sunrise">{timeMaker(data.sys.sunrise)}</h3>
                    </div>
                </div>
            </div>
            <div className="humidity" title="Sunset">
                <p>sun_rise</p>
                <div className="pressure-details">
                    <i className="fa-solid fa-cloud-moon" ></i>
                    <div className="meter-box">
                        <h3 id="sunset">{timeMaker(data.sys.sunset)}</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div > : <Loading />
}

export default Container;