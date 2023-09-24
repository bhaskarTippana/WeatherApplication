import "../../404.css";
import astronaut from "../image/astronaut.png"
import space from "../image/space-7295939_1920.png";
import cloud from "../image/storm.png"


function Error() {
    return <div style={{ backgroundImage: `url(${space})` }} className="body">
        <div className="error">
            <div className="logo">
                <img src={cloud} alt="" />
            </div>
            <h1 id="status">404</h1>
            <p>Check City You Enter !</p>
        </div>
        <div className="img"><img src={astronaut} alt="" /></div>
    </div>
}

export default Error;