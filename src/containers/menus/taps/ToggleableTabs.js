import Nav from "../../../components/Nav";
import '../../../css-set/tabs/ToggleableTabs.css';


function ToggleableTabs() {

    function openCity(tabId, cityName) {
        if(cityName === "London") {
            document.getElementById(tabId).classList.add("active");
            document.getElementById(cityName).style.display = "block";
            document.getElementById("Paris").style.display = "none";
            document.getElementById("Tokyo").style.display = "none";
        } else {
            document.getElementById("tab1").classList.remove("active");
            
        }

        if(cityName === "Paris") {
            document.getElementById(tabId).classList.add("active");
            document.getElementById(cityName).style.display = "block";
            document.getElementById("London").style.display = "none";
            document.getElementById("Tokyo").style.display = "none";
        } else {
            document.getElementById("tab2").classList.remove("active");
            
        }
        
        if(cityName === "Tokyo") {
            document.getElementById(tabId).classList.add("active");
            document.getElementById(cityName).style.display = "block";
            document.getElementById("Paris").style.display = "none";
            document.getElementById("London").style.display = "none";
        } else {
            document.getElementById("tab3").classList.remove("active");
            
        }
        
    }
    return(
        <div>
            <Nav />
           
                <div className="tab">
                    <button className="tablinks" id="tab1" onClick={() => openCity("tab1", "London")}>
                        London
                    </button>
                    <button className="tablinks" id="tab2" onClick={() => openCity("tab2", "Paris")}>
                        Paris
                    </button>
                    <button className="tablinks" id="tab3" onClick={() => openCity("tab3", "Tokyo")}>
                        Tokyo
                    </button>
                </div>
              
                    <div id="London" className="tabcontent">
                        <br />
                        <h3 >London</h3>
                        <p>London is the capital city of England.</p>
                    </div>
                    <div id="Paris" className="tabcontent">
                        <h3>Paris</h3>
                        <p>Paris is the capital of France.</p>
                    </div>
                    <div id="Tokyo" className="tabcontent">
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                
           
        </div>
    )
}

export default ToggleableTabs;