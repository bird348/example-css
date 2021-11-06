import Nav from "../../../components/Nav";
import "../../../css-set/menu-icon/BasicMenuIcon.css";


function BasicMenuIcon() {
    return(
        <div>
            <Nav />
            <div style={{margin: "10px"}}>
                <div className="basic-menu-icon"></div>
                <div className="basic-menu-icon"></div>
                <div className="basic-menu-icon"></div>
            </div>
        </div>
    )
}

export default BasicMenuIcon;