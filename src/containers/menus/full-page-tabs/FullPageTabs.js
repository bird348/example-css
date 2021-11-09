import '../../../css-set/full-page-tabs/fullPageTabs.css';
import Nav from '../../../components/Nav';
import { useEffect } from 'react';


function FullPageTabs() {

    useEffect(() => {
        document.getElementById("b2").click();
    }, [])

    function openPage(page, buttonNo, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("full-tabcontent");
        for (i=0; i < tabcontent.length; i++ ) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("full-tablink");
        for (i=0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        document.getElementById(page).style.display = "block";
        document.getElementsByTagName("BUTTON")[buttonNo].style.backgroundColor = color;
    }
    return(
        <di>
            <Nav />
            <button className="full-tablink" onClick={() => openPage("Home-full", 0, "red")}>Home</button>
            <button className="full-tablink" id="b2" onClick={() => openPage("News-full", 1, "green")}>News</button>
            <button className="full-tablink" onClick={() => openPage("Contact-full", 2, "blue")}>Contact</button>
            <button className="full-tablink" onClick={() => openPage("About-full", 3, "orange")}>About</button>

            <div id="Home-full" className="full-tabcontent">
                <h3>Home</h3>
                <p>Home is where the heart is..</p>
            </div>

            <div id="News-full" className="full-tabcontent">
                <h3>News</h3>
                <p>Some news this fine day!</p>
            </div>

            <div id="Contact-full" className="full-tabcontent">
                <h3>Contact</h3>
                <p>Get in touch, or swing by for acup of coffee.</p>
            </div>

            <div id="About-full" className="full-tabcontent">
                <h3>About</h3>
                <p>Whomwe are and what we do.</p>
            </div>
        </di>
    )
}

export default FullPageTabs;