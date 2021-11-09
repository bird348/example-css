import '../../../css-set/top-navigation/topNavigation.css';
import Nav from '../../../components/Nav';


function TopNavigation() {

    return(
        <div>
            <Nav />
            <hr />
            <div className="topnav">
                <a className="topnav-active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default TopNavigation;