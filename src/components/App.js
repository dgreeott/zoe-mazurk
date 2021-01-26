import '../css/App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';


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
            <Footer />
          </Route>
          <Route path="/about" exact>
            <Navbar />
            <About />
            <Footer />
          </Route>
          <Route path="/contact" exact>
            <Navbar />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
