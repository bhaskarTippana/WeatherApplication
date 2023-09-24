import "../App.css";

import Header from "./components/header";
import Aside from "./components/aside";
import Container from "./components/container";
import { useEffect, useState } from "react";
import Error from "./components/Error";

function App() {
  let [data, setData] = useState();
  let [Found, setFound] = useState(true);
  useEffect(() => {
    let longitude;
    let latitude;
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      let x = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=61c3afa46ce689085e22ab014ca0acc9`);
      x.then((data) => { data.json().then((res) => { setData(res) }) });
    })
  }, []);






  function updateData(data) {
    setData(data);
  }




  return Found ? <main>
    <div className="shade"></div>
    <Header updateData={updateData} setFound={setFound} />
    <div className="app-body">
      <Aside data={data} />
      <Container data={data} />
    </div>
  </main> : <Error />
}
export default App;

