import '../../../css-set/hover-tabs/hoverTabs.css';
import Nav from '../../../components/Nav';


function HoverTabs() {

    function openCity(cityName, evt) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("hover-tabcontent");
        for (i=0; i<tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("hover-tablinks");
        for (i=0; i<tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return(
        <div>
            <Nav />
            <div className="hover-tab">
                <button className="hover-tablinks" onMouseOver={(e) => openCity("London", e)}>London</button>
                <button className="hover-tablinks" onMouseOver={(e) => openCity("Paris", e)}>Paris</button>
                <button className="hover-tablinks" onMouseOver={(e) => openCity("Tokyo", e)}>Tokyo</button>
            </div>

            <div id="London" className="hover-tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>
            
            <div id="Paris" className="hover-tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital France.</p>
            </div>

            <div id="Tokyo" className="hover-tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
        </div>
    )
}

export default HoverTabs;