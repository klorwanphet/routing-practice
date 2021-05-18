import { Router, navigate } from '@reach/router'
import './App.css';
import Coloring from './components/Coloring';
import Home from './components/Home';
import Number from './components/Number';



function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Coloring path = "/:val/:col1/:col2"/>
        <Number path = "/:val"/>
      </Router>
    </div>
  );
}

export default App;
