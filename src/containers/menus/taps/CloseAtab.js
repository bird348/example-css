import '../../../css-set/tabs/CloseAtab.css';
import Nav from '../../../components/Nav';
import { useEffect } from 'react';


function CloseAtab() {

    useEffect(() => {
        document.getElementById("defaultOpen").click();
    }, [])

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("c-tabcontent");
        for (i=0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("c-tablinks");
        for (i=0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    function defaultOpen() {
        document.getElementById("defaultOpen").click();
    }
    
    function closeButton(city) {
        document.getElementById(city).style.display = "none";
    }

    return(
        <div>
            <Nav />
            <div className="c-tab">
                <button className="c-tablinks" onClick={(e) => openCity(e, "London")} id="defaultOpen">London</button>
                <button className="c-tablinks" onClick={(e) => openCity(e, "Paris")}>Paris</button>
                <button className="c-tablinks" onClick={(e) => openCity(e, "Tokyo")}>Tokyo</button>
            </div>
            <div id="London" className="c-tabcontent">
                <span onClick={(e) => closeButton("London")} className="c-topright">x</span>
                <h3>London</h3>
                <p>
                    London is the capital city of England.
                </p>
            </div>
            <div id="Paris" className="c-tabcontent">
                <span onClick={() => closeButton("Paris")} className="c-topright">x</span>
                <h3>Paris</h3>
                <p>
                    Paris is the capital city of France.
                </p>
            </div>
            <div id="Tokyo" className="c-tabcontent">
                <span onClick={() => closeButton("Tokyo")} className="c-topright">x</span>
                <h3>Tokyo</h3>
                <p>
                    Tokyo is the capital city of Japan.
                </p>
            </div>
        </div>
    )
}

export default CloseAtab;