/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
// import BrowserRouter as Router, Route from 'react-router-dom';
// import React, {component} from 'react';
// import Main from './components/Main';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import User from './components/User';
import login from './components/login';
import SignUp from './components/SignUp';
import BusList from './components/Buslist';
import Home from './components/Home';
import userview from './components/userview';
import { Update } from './components/updateBus';
import Delete from './components/deleteBus';
import Seat from './components/Seat';
import Open from './components/open';
import Close from './components/close';
import Seatstore from './components/Seatstore';

const App = () => (
  <Router>
    <Route path="/" exact component={login} />
    <Route path="/login" component={login} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Home" exact component={Home} />
    <Route path="/User" component={User} />
    <Route path="/userview" component={userview} />
    <Route path="/update" component={Update} />
    <Route path="/delete" component={Delete} />
    <Route path="/Seat" component={Seat} />
    <Route path="/open" component={Open} />
   
    <Route path="/close" component={Close} />
    
    <Route path="/seatstore" component={Seatstore} />
    

    <Route path="/BusList" component={BusList} />
  </Router>
);

export default App;
