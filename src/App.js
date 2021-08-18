import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';

// import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="app">

      <Navbar />
      {/* <h1 className="br-br">Br<sub>2</sub></h1> */}
      {/* <h1 className="br2">{`<br>`}<sup>2</sup></h1> */}
      {/* <h1 className="br-br">{`<br>enna <br>uening`}</h1> */}


      {/* <Router> */}
      <Home />
      {/* </Router> */}

      <Footer />
    </div>
  );
}

export default App;
