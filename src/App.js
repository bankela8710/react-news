import React from 'react';
import './App.css';
import Nav from './nav';
import Sports from './sports';
import Health from './health';
import Entertainment from './entertainment';
import Science from './science';
//import ItemSportSingle from './sportItem';
//import PortalLinks from './portalLink.js';
import Business from './business';
import Technology from './technology';
import GetCurrentDate from './utils';
import Headlins from './headlines';
import Weather from './weather';
import ScrollArrow from './buttonTop';
import TechnologyItem from './itemTechnology';
import HealthItem from './itemHealth';
import SportItem from './itemSport';
import ScienceItem from './itemScience';
import EntertainmentItem from './itemEntertainement';
import HeadlinesItem from './itemHeadlines';
import BusinessItem from './itemBusiness';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';


function App() {

  return (

    <div className="App">
      <Router>
        <header className="App-header">
          <Nav />
          <GetCurrentDate />

          <Switch>

            <Route path="/sport" exact component={Sports} />
            <Route path="/sport/:title" component={SportItem} />
            <Route path="/health/" exact component={Health} />
            <Route path="health/:title" component={HealthItem} />
            <Route path="/science" exact component={Science} />
            <Route path="/science/:title" component={ScienceItem} />
            <Route path="/entertainment" exact component={Entertainment} />
            <Route path="entertainment/:title" component={EntertainmentItem} />
            <Route path="/business" exact component={Business} />
            <Route path="/business/:title" component={BusinessItem} />
            <Route path="/technology" exact component={Technology} />
            <Route path="/technology/:title" component={TechnologyItem} />
            <Route path="/" exact component={Headlins} />
            <Route path="/:title" component={HeadlinesItem} />

          </Switch>

        </header>
      </Router>

      <footer className="footer">
        <ScrollArrow />
        <Footer />
      </footer>

    </div>

  );
}



export default App;
