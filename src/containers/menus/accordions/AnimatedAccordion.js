import "../../../css-set/accordion/AnimatedAccordion.css";
import Nav from "../../../components/Nav";


function AnimatedAccordion() {
    
    function isOpen(val1, val2) {
        
        if(val1 === "acc1" && val2 === "pan1") {
            document.getElementById("acc1").classList.toggle("active-animated");
            var pan1 = document.getElementById(val2).style.maxHeight;
            if(pan1) {
                document.getElementById(val2).style.maxHeight = null;
            } else {
                document.getElementById(val2).style.maxHeight = document.getElementById(val2).scrollHeight + "px";
            }
        }
        
        if(val1 === "acc2" && val2 === "pan2") {
            document.getElementById("acc2").classList.toggle("active-animated");
            var pan2 = document.getElementById(val2).style.maxHeight;
            if(pan2) {
                document.getElementById(val2).style.maxHeight = null;
            } else {
                document.getElementById(val2).style.maxHeight = document.getElementById(val2).scrollHeight + "px";
            }
        }

        if(val1 === "acc3" && val2 === "pan3") {
            document.getElementById("acc3").classList.toggle("active-animated");
            var pan3 = document.getElementById(val2).style.maxHeight;
            if(pan3) {
                document.getElementById(val2).style.maxHeight = null;
            } else {
                document.getElementById(val2).style.maxHeight = document.getElementById(val2).scrollHeight + "px";
            }
        }
    }
    return(
        <div>
            <Nav />
            <div style={{marginTop: "10px"}}>
                <button className="animated-accordion" id="acc1" onClick={() => isOpen("acc1", "pan1")}>Section 1</button>
                <div className="animated-panel" id="pan1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className="animated-accordion" id="acc2" onClick={() => isOpen("acc2", "pan2")}>Section 2</button>
                <div className="animated-panel" id="pan2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className="animated-accordion" id="acc3" onClick={() => isOpen("acc3", "pan3")}>Section 3</button>
                <div className="animated-panel" id="pan3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AnimatedAccordion;