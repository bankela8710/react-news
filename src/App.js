import React from 'react';
import './App.css';
import Nav from './nav';
import Sports from './sports';
import Health from './health';
import Entertainment from './entertainment';
import Science from './science';
import ItemSportSingle from './sportItem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Nav />
       <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/sport" exact component={Sports} />
       <Route path="/sport/title" component={ItemSportSingle}/>
       <Route path="/health" component={Health} />
       <Route path="/science" component={Science} />
       <Route path="/entertainment" component={Entertainment} />
       
       </Switch>
      </header>
    </div>
    </Router>
  );
}

const Home = ()=>(
<div>
  <h1>Home</h1>
</div>
);

export default App;
