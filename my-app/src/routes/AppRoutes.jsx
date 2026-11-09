import { Switch,Route } from "react-router-dom";
import Home from"../pages/Home.jsx"
import NotPageFound from "../pages/NotPageFound";
import Contact from "../pages/Contact";
import About from "../pages/About";

function AppRoutes(){
    return<Switch>
    <Route exact path="/" component={Home}/>
   <Route path="/about" component={About}/>
    <Route  path="/contact" component={Contact}/>
    <Route  component={NotPageFound}/>
    </Switch>
}

export default AppRoutes