import "../../../css-set/icon-bar/HiconBar.css";
import Nav from "../../../components/Nav";


function HiconBar() {
    return(
        <div>
            <Nav />
            <div className="h-icon-bar" style={{marginTop: "10px"}}>
            <a className="h-active" href="#"><i className="fa fa-home"></i></a>
            <a href="#"><i className="fa fa-search"></i></a>
            <a href="#"><i className="fa fa-envelope"></i></a>
            <a href="#"><i className="fa fa-globe"></i></a>
            <a href="#"><i className="fa fa-trash"></i></a>
            </div>
        </div>
        
    )
}

export default HiconBar;