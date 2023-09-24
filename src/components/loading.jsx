import search from "../image/search.png"
import bg from "../image/9078414.jpg"

function Loading() {

    return <div className="demo-search">

        <div className="banner"><img src={bg} alt="" /></div>
        <div className="top">
            <div className="search-img"><img src={search} alt="" /></div>
            <p>Enter City</p>
        </div>
    </div>
}

export default Loading;