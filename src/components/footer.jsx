import svg from "../image/wave.svg";

function Footer() {
    const date = new Date();

    return <div className="footer" style={{ background: `url(${svg})` }}>
        <h4 id="sep"><em>bhaskarbunny1371@gmail.com</em></h4>
        <h4 id="sep">|</h4>
        <div className="github">
            <i className="fa-brands fa-github"></i>
            <em>
                <h3><a href="https://github.com/bhaskarTippana">| GitHub </a> CopyRight {date.getFullYear()}</h3>
            </em>
        </div>
    </div>
}

export default Footer;