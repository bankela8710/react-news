import React from 'react';
import './App.css';
import Nav from './nav';
import Sports from './sports';
import Health from './health';
import Entertainment from './entertainment';
import Science from './science';
import ItemSportSingle from './sportItem';
import Footer from './footer.js';
import Business from './business';
import Technology from './technology';
import GetCurrentDate from './utils';
import Headlins from './headlines';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    
    <div className="App">
      <Router>
      <header className="App-header">
       <Nav />
       <Switch>
      
       <Route path="/sport" exact component={Sports} />
       <Route path="/sport/title" component={ItemSportSingle}/>
       <Route path="/health" component={Health} />
       <Route path="/science" component={Science} />
       <Route path="/entertainment" component={Entertainment} />
       <Route path="/business" component={Business} />
       <Route path="/technology" component={Technology} />
       
       </Switch>
      
      </header>
      </Router>
     
      <body>
        <section>
          <div>
       <Headlins />
          </div>
        </section>
      
       
      </body>
      
      <footer>
        <Footer />
      </footer>
      
    </div>
    
  );
}



export default App;
