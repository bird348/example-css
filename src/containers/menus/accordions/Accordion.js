import "../../../css-set/accordion/Accordion.css";
import Nav from "../../../components/Nav";


function Accordion() {
    
    function isOpen(val1, val2) {
        
        if(val1 === "a1" && val2 === "b1") {
            document.getElementById(val1).classList.toggle("active");
            document.getElementById(val2).classList.toggle("panel");
            document.getElementById(val2).classList.toggle("panel-open")
        } 
        if(val1 === "a2" && val2 === "b2") {
            document.getElementById(val1).classList.toggle("active");
            document.getElementById(val2).classList.toggle("panel");
            document.getElementById(val2).classList.toggle("panel-open")
        }
        if(val1 === "a3" && val2 === "b3") {
            document.getElementById(val1).classList.toggle("active");
            document.getElementById(val2).classList.toggle("panel");
            document.getElementById(val2).classList.toggle("panel-open")
        }
    }
    return(
        <div>
            <Nav />
            <div style={{marginTop: "10px"}}>
                <button className="accordion" id="a1" onClick={() => isOpen("a1", "b1")}>Section 1</button>
                <div className="panel" id="b1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className="accordion" id="a2" onClick={() => isOpen("a2", "b2")}>Section 2</button>
                <div className="panel" id="b2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className="accordion" id="a3" onClick={() => isOpen("a3", "b3")}>Section 3</button>
                <div className="panel" id="b3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Accordion;