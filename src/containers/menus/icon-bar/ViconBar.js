import Nav from "../../../components/Nav";
import "../../../css-set/icon-bar/ViconBar.css";

function IconBar() {
    return(
        <div>
            <Nav />
            <div className="v-icon-bar" style={{marginTop: "10px"}}>
                <a className="v-active" href="#"><i className="fa fa-home"></i></a>
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><i className="fa fa-envelope"></i></a>
                <a href="#"><i className="fa fa-globe"></i></a>
                <a href="#"><i className="fa fa-trash"></i></a>
            </div>
        </div>
    )
}

export default IconBar;