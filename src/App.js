import './App.css';
import Card from './Components/Card';
import Home from './Components/Home';
import count from './Components/count';
//import Increment from './Components/Increment';
import Map from './Components/Map';
//import Navbar from './Components/Navbar';
import { Routes,Route} from 'react-router-dom';
import Badge from './Components/Badge';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/*<Home />*/}
      {/*<Navbar />*/}
      <Badge />
      <Card />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/count" component={count} />
      </Routes>
    </div>
  );
}

export default App;
