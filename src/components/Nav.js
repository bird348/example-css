import { Link } from "react-router-dom";
import "../css-set/Navigation.css";


function Nav() {
    return(
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Nav;