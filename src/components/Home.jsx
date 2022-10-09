
import '../App.css';
import React from 'react';

import {HashRouter as Router, Link, Route, Routes} from 'react-router-dom';

import User from './User';
import Categories from './Categories';
import Tasks from './Tasks';
import BecomeHelper from './Worker';


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
            <span id="leftLinks">    
            <Link to="/">Home</Link>
            {' '}{' '}
            <Link to="/categories">Categories</Link>
            {' '}{' '} 
            <Link to="/tasks">Browse Tasks</Link> 
            {' '}{' '}
            <Link to="/postTasks">Post a Task</Link> 
            {' '}{' '}
            <Link to="/worker">Become Worker</Link> 
            {' '}{' '}
            </span>
            
            
            <span id="rightLinks">
            <Link to='/login'>Login</Link>
            {' '}{' '}
            <Link to='/signUp'>Sign Up</Link>
            </span>
            </div>


        </nav>
        <br />
        <br />
        

        <div class="searchbar">
            <input type="text" />
            {' '}{' '}
            <button>Search</button>
            {' '}{' '}
        </div>

        <hr />
      
        
        
        {/* <div className="routes">
            <Routes>
                <Route path="/" element={ <Home/> }  >
                <Route path="/categories" element={ <Categories/> } />
                <Route path="/tasks" element={ <Tasks/> }/>
                <Route path="/worker" element={ <BecomeHelper/> }/>
                </Route>
            </Routes>

        </div> */}

      </Router>

      
    </div>
    
  );

}

export default Home;