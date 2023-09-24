import logo from "../image/weather.png"
import userImg from "../image/1.jpg"
import { useState, useEffect } from "react";

export default function Header({ updateData, setFound }) {

    // time function 
    let [time, setTime] = useState("00:00:00");
    useEffect(() => {
        setInterval(() => {
            let time = new Date();
            time = time.toLocaleTimeString();
            setTime(time);
        }, 1000)
    }, [])

    // countries list
    // input state
    let [input, setInput] = useState("");
    let handleInputChange = (e) => {
        setInput(e.target.value);
    }



    // input countries api
    let [country, setCountry] = useState([]);
    useEffect(() => {
        let countries = fetch("https://countriesnow.space/api/v0.1/countries");
        countries.then((data) => {
            data.json().then((res) => {
                let x = res.data.filter((e) => e.country === "India");
                setCountry(x[0].cities);
            })
        })
    }, []);


    // submit action


    function handleSubmit(e) {
        e.preventDefault();
        let x = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=61c3afa46ce689085e22ab014ca0acc9`);
        x.then((data) => {
            data.json().then((data) => { data.cod === 200 ? updateData(data) : setFound(false) })
        })
    }





    return <header>
        <nav>
            <div className="left">
                <div className="img-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="title">
                    <h2>Weather AI</h2>
                </div>
            </div>
            <div className="middle">
                <div className="input-box">
                    <div className="input">
                        <input list="places" type="text" placeholder="Search City..." id="place" autoFocus onChange={handleInputChange} value={input} />
                        <datalist id="places">
                            {country.map((e, index) => { return <option value={e} key={index}>{e}</option> })}
                        </datalist>
                    </div>
                    <form className="search-logo" id="search" onSubmit={handleSubmit}>
                        <button type="submit"><i className="fa-solid fa-magnifying-glass" style={{ color: "inherit" }}></i></button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="time-box">
                    <h4 id="time">{time}</h4>
                </div>
                <div className="user" title="Karthik">
                    <a href="#" target="blank"><img src={userImg} alt="" /></a>
                </div>
            </div>
        </nav>
    </header>
}