import '../css/App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
