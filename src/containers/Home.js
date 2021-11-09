import { Link } from "react-router-dom";
import Nav from "../components/Nav";


function Home() {
    return(
        <div>
            <Nav />
            <div style={{marginTop: "10px"}}>
                <h3>Menus</h3>
                <ul>
                    <li><Link to="/menus/icon-bar/vicon-bar">Vertical-icon bar</Link></li>
                    <li><Link to="/menus/icon-bar/hicon-bar">Horizontal-icon-bar</Link></li>
                    <li><Link to="/menus/menu-icon/basic-menu-icon">Menu icon (Basic)</Link></li>
                    <li><Link to="/menus/menu-icon/animated-menu-icon">Menu icon (Animated)</Link></li>
                    <li><Link to="/menus/accordions/accordion">Accordion</Link></li>
                    <li><Link to="/menus/accordions/animated-accordion">Animated Accordion (Slide Down)</Link></li>
                    <li><Link to="/menus/tabs/toggleable-tabs">Toggleable Taps</Link></li>
                    <li><Link to="/menus/tabs/fade-in-tabs">Fade in Tabs Taps</Link></li>
                    <li><Link to="/menus/tabs/close-a-tabs">Close a tabs</Link></li>
                    <li><Link to="/menus/vertical-tabs/vertical-tabs-basic">Vertical Tabs Basic</Link></li>
                    <li><Link to="/menus/tab-headers/tab-headers-basic">Tab Headers</Link></li>
                    <li><Link to="/menus/full-page-tabs/full-page-tabs-basic">Full Page Tabs</Link></li>
                    <li><Link to="/menus/hover-tabs/hover-tabs-basic">Hover Tabs</Link></li>
                    <li><Link to="/menus/top-navigation/top-navigation-basic">Top Navigation</Link></li>
                    <li><Link to="/menus/responsive-navigation-bar/responsive-navigation-bar-basic">Responsive Navigation Bar</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;