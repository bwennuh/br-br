import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      {/* <h1 className="br-br">Br<sub>2</sub></h1> */}
      <h1 className="br2">{`<br>`}<sup>2</sup></h1>
      <h1 className="br-br">{`<br>enna <br>uening`}</h1>
      {/* <Navbar /> */}
      <Home />
    </div>
  );
}

export default App;
