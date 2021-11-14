import Nav from "../../../components/Nav"
import '../../../css-set/search-bar/searchBar.css';


export default function SearchBar() {

    return(
        <div>
            <Nav />
            <div className="topnav-sb">
                <a className="active-sb" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <div className="search-container-sb">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}