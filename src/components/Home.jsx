
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

      <Router>
        <header className="App-header">
            
        <h1>TakeItEasy</h1>
        <h3>Get back time for yourself.</h3>
        
        </header>
        <hr />
      
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
            
            <span class="searchbar">
            <input type="text" />
            {' '}{' '}
            <button>Search</button>
            {' '}{' '}
            </span>
            
            <Link to='/login'>Login</Link>
            {' '}{' '}
            <Link to='/signup'>Sign Up</Link>
            </div>

        </nav>
        <hr />
      
        
        
        {/* <div className="routes">
            <Routes>
                <Route path="/" element={ <Home/> }  >
                <Route path="/categories" element={ <Categories/> } />
                <Route path="/tasks" element={ <Tasks/> }/>
                <Route path="/becomehelper" element={ <BecomeHelper/> }/>
                </Route>
            </Routes>

        </div> */}

      </Router>

      
    </div>
    
  );

}

export default Home;