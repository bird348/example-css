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
      </Switch>
    </Router>
  );
}

export default App;
