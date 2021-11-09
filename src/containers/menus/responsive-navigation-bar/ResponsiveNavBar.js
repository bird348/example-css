import Nav from "../../../components/Nav";
import '../../../css-set/responsive-navbar/responsiveNavBar.css';


function ResponsiveNavBar() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav-res") {
            x.className += " responsive";
        } else {
            x.className = "topnav-res";
        }
    }

    return(
        <div>
            <Nav />
            <hr />
            <div className="topnav-res" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon-res" onClick={() => myFunction()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}


export default ResponsiveNavBar;