import "../css/App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/gallery" exact>
            <Navbar />
            <Gallery />
          </Route>
          <Route path="/about" exact>
            <Navbar />
            <About />
          </Route>
          <Route path="/contact" exact>
            <Navbar />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
