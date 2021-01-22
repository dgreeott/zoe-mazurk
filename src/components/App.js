import "../css/App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

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
          <Route path="/shop" exact>
            <Navbar />
            <Shop />
          </Route>
          <Route path="/contact" exact>
            <Navbar />
            <Contact />
          </Route>
          <Route path="/cart" exact>
            <Navbar />
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
