import Nav from "../../../components/Nav";
import "../../../css-set/menu-icon/AnimatedMenuIcon.css"
import { useState } from "react";

function AnimatedMenuIcon() {
 
    const [isActive, setIsActive] = useState(true);
    function changeIcon() {
        if(isActive) {
            setIsActive(false);
        } else setIsActive(true);
        
    }

    return(
        <div>
            <Nav />
            <div className={isActive? "container" : "container change"} style={{margin: "10px"}} onClick = {() => changeIcon()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </div>
        </div>
    )
}

export default AnimatedMenuIcon;