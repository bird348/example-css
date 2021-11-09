import '../../../css-set/tab-headers/tabHeaders.css';
import Nav from '../../../components/Nav';
import { useEffect } from 'react';


function TabHeaders() {

    useEffect(() => {
        document.getElementById("defaultOpen").click();
    }, [])
    function openCity(cityName, buttonColor, color) {
        var i, tabcontent, tablink;

        tabcontent = document.getElementsByClassName("h-tabcontent");
        for (i=0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        tablink = document.getElementsByClassName("h-tablink");
        for (i=0; i < tablink.length; i++) {
            tablink[i].style.backgroundColor = "";
        }

        document.getElementById(cityName).style.display = "block";
        document.getElementsByTagName("BUTTON")[buttonColor].style.backgroundColor = color;
        
    }

    return(
        <div>
            <Nav />
            <div>
                <div id="London-h" className="h-tabcontent">
                    <h1>London</h1>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Paris-h" className="h-tabcontent">
                    <h1>Paris</h1>
                    <p>Paris is the capital city of France.</p>
                </div>

                <div id="Tokyo-h" className="h-tabcontent">
                    <h1>Tokyo</h1>
                    <p>Tokyo is the capital city of Japan.</p>
                </div>

                <div id="Oslo-h" class="h-tabcontent">
                    <h1>Oslo</h1>
                    <p>Oslo is the capital of Norway.</p>
                </div>

                <button className="h-tablink" id="red-button" onClick={() => openCity("London-h", 0, "red")} id="defaultOpen">London</button>
                <button className="h-tablink" id="green-button" onClick={() => openCity("Paris-h", 1, "green")}>Paris</button>
                <button className="h-tablink" id="blue-button" onClick={() => openCity("Tokyo-h", 2, "blue")}>Tokyo</button>
                <button className="h-tablink" id="orange-button" onClick={() => openCity("Oslo-h", 3, "orange")}>Oslo</button>
            </div>
        </div>
    )
}

export default TabHeaders;