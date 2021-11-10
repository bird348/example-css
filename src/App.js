import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import ViconBar from "./containers/menus/icon-bar/ViconBar";
import HiconBar from "./containers/menus/icon-bar/HiconBar";
import BasicMenuIcon from "./containers/menus/menu-icon/BasicMenuIcon";
import AnimatedMenuIcon from "./containers/menus/menu-icon/AnimatedMenuIcon";
import Accordion from "./containers/menus/accordions/Accordion";
import AnimatedAccordion from "./containers/menus/accordions/AnimatedAccordion";
import ToggleableTabs from "./containers/menus/taps/ToggleableTabs";
import FadeInTabs from "./containers/menus/taps/FadeInTabs";
import CloseAtab from "./containers/menus/taps/CloseAtab";
import VerticalTabs from "./containers/menus/vertical-tabs/verticalTabs";
import TabHeaders from "./containers/menus/tab-headers/TabHeaders";
import FullPageTabs from "./containers/menus/full-page-tabs/FullPageTabs";
import HoverTabs from "./containers/menus/hover-tabs/HoverTabs";
import TopNavigation from "./containers/menus/top-navigation/TopNavigation";
import ResponsiveNavBar from "./containers/menus/responsive-navigation-bar/ResponsiveNavBar";
import NavBarIcon from "./containers/menus/navbar-icon/NavBarIcon";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/menus/icon-bar/vicon-bar" exact>
          <ViconBar />
        </Route>
        <Route path="/menus/icon-bar/hicon-bar" exact>
          <HiconBar />
        </Route>
        <Route path="/menus/menu-icon/basic-menu-icon" exact>
          <BasicMenuIcon />
        </Route>
        <Route path="/menus/menu-icon/animated-menu-icon" exact>
          <AnimatedMenuIcon />
        </Route>
        <Route path="/menus/accordions/accordion" exact>
          <Accordion />
        </Route>
        <Route path="/menus/accordions/animated-accordion" exact>
          <AnimatedAccordion />
        </Route>
        <Route path="/menus/tabs/toggleable-tabs" exact>
          <ToggleableTabs />
        </Route>
        <Route path="/menus/tabs/fade-in-tabs" exact>
          <FadeInTabs />
        </Route>
        <Route path="/menus/tabs/close-a-tabs" exact>
          <CloseAtab />
        </Route>
        <Route path="/menus/vertical-tabs/vertical-tabs-basic" exact>
          <VerticalTabs />
        </Route>
        <Route path="/menus/tab-headers/tab-headers-basic" exact>
          <TabHeaders />
        </Route>
        <Route path="/menus/full-page-tabs/full-page-tabs-basic" exact>
          <FullPageTabs />
        </Route>
        <Route path="/menus/hover-tabs/hover-tabs-basic" exact>
          <HoverTabs />
        </Route>
        <Route path="/menus/top-navigation/top-navigation-basic" exact>
          <TopNavigation />
        </Route>
        <Route path="/menus/responsive-navigation-bar/responsive-navigation-bar-basic" exact>
          <ResponsiveNavBar />
        </Route>
        <Route path="/menus/navbar-icon/navbar-icon-basic" exact>
          <NavBarIcon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
