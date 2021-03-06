import Nav from "../../../components/Nav";
import '../../../css-set/search-menu/searchMenu.css';

function SearchMenu() {

    function myFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");
        for (i=0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    return(
        <div>
            <Nav />
            <div className="row-sm">
                <div className="left-sm" style={{backgroundColor: "#bbb"}}>
                    <h2>Menu</h2>
                    <input type="text" id="mySearch" onKeyUp={() => myFunction()} placeholder="Seach.." title="Type in a category" />
                    <ul id="myMenu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">PHP</a></li>
                        <li><a href="#">Python</a></li>
                        <li><a href="#">j!uery</a></li>
                        <li><a href="#">SQL</a></li>
                        <li><a href="#">Bootstrap</a></li>
                        <li><a href="#">Node.js</a></li>
                    </ul>
                </div>
                <div className="right-sm" style={{backgroundColor: "#ddd"}}>
                    <h2>Page Content</h2>
                    <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
                    <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
                    <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
                    <p>Some text..</p>
                </div>
            </div>
        </div>
    )
}

export default SearchMenu;