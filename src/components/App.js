import '../css/App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';


const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
