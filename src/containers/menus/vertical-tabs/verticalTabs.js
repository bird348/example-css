import "../../../css-set/vertical-tabs/verticalTabs.css";
import Nav from "../../../components/Nav";


function VerticalTabs() {

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("v-tabcontent");
        for (i=0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("v-tablinks");
        for (i=0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return(
        <div>
            <Nav />
            <div className="v-tab">
                <button className="v-tablinks" onClick={(e) => openCity(e, "London")}>London</button>
                <button className="v-tablinks" onClick={(e) => openCity(e, "Paris")}>Paris</button>
                <button className="v-tablinks" onClick={(e) => openCity(e, "Tokyo")}>Tokyo</button>
            </div>

            <div id="London" className="v-tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>
            <div id="Paris" className="v-tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital city of France.</p>
            </div><div id="Tokyo" className="v-tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital city of Japan.</p>
            </div>
        </div>
    )
}

export default VerticalTabs;