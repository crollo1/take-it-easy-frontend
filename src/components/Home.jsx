
import '../App.css';
import React from 'react';

import {HashRouter as Router, Link, Route, Routes} from 'react-router-dom';

import User from './User';
import Categories from './Categories';
import Tasks from './Tasks';
import BecomeHelper from './BecomeHelper';


function Home() {

  return (

    <div className="App">
      <header className="App-header">
        
       <h1>TakeItEasy</h1>
       <h3>Get back time for yourself.</h3>

      <Router>
        <nav id="navbar">
            <div class="links">
            <Link to="/">Home</Link>
            {' '}{' '}
            <Link to="/categories">Categories</Link>
            {' '}{' '} 
            <Link to="/tasks">Browse Tasks</Link> 
            {' '}{' '}
            <Link to="/becomehelper">Become Helper</Link> 
            {' '}{' '}
            
            ---------------------
            
            <Link to='/login'>Login</Link>
            {' '}{' '}
            <Link to='/signup'>Sign Up</Link>
            </div>

            <div class="search">
            <input type="text" />
            {' '}{' '}
            <button>Search</button>
            {' '}{' '}
            </div>
        </nav>
      </Router>
      </header>
    </div>
    
  );

}

export default Home;