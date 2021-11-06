import Nav from "../../../components/Nav";
import "../../../css-set/tabs/FadeInTabs.css";

function FadeInTabs() {
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("f-tabcontent");
        for(i=0; i<tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("f-tablinks");
        for(i=0; i<tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display="block";
        evt.currentTarget.className += " active";
    }

    return(
        <div>
            <Nav />
            <div className="f-tab">
                <button className="f-tablinks" onClick={(e) => openCity(e, "London")}>London</button>
                <button className="f-tablinks" onClick={(e) => openCity(e, "Paris")}>Paris</button>
                <button className="f-tablinks" onClick={(e) => openCity(e, "Tokyo")}>Tokyo</button>
            </div>

            <div id="London" className="f-tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="f-tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital city of France.</p>
            </div>

            <div id="Tokyo" className="f-tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital city of Japan.</p>
            </div>
        </div>
    )
}

export default FadeInTabs;