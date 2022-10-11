
import '../App.css';
import React, { useEffect, useState } from 'react';

// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
import {BrowserRouter as Router, json, Link, Route, Routes} from 'react-router-dom';

import User from './User';
import Login from './Login';
import SignUp from './SignUp';
import Greeting from './Greeting';
import Categories from './Categories';
import Tasks from './Tasks';
import PostTask from './PostTask';
import BecomeHelper from './Worker';
import MyProfile from './MyProfile';
import axios from 'axios';

let BASE_BACKEND_URL = 'http://localhost:3000';

function Home( props ) {

  const [currentUser, setCurrentUser] = useState(null);

    useEffect( () => {

      console.log('Component Mounting!');
      fetchUser();

    }, [] );

  // function to set current user
  function fetchUser () {

      let token = "Bearer " + localStorage.getItem("jwt");
      axios.get(`${BASE_BACKEND_URL}/current_user`, {

        headers: {
          'Authorization': token
        }

      })
      .then(res => {

        // TODO: BELOW MIGHT BE AN ERROR should be in object
        setCurrentUser(res.data)
  
      })
      .catch(err => console.warn(err))
  };

  // function to log-out user
  function handleLogOut (){

    setCurrentUser(undefined)
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined;

  }

  return (

    <div className="App">

      {/* <Router> */}
        <header className="App-header">    
        <h1>TakeItEasy</h1>
        <h3>Get back time for yourself.</h3>
        </header>
        <hr />
      
        {/* currentUser !== null */}
        <nav id="navbar">
            <div className="links">
            <span id="rightLinks">
            <Link to='/login'>Login</Link>
            <Link to='/signUp'>Sign Up</Link>
            </span>
            <span id="leftLinks">    
            <Link to="/">Home</Link>
            <Link to="/worker">Become Worker</Link> 

            <Link to="/categories">Categories</Link> 
            <Link to="/tasks">Browse Tasks</Link> 
            <Link to="/postTask">Post a Task</Link> 
            </span>
            </div>
        </nav>
        <br />
        <br />
        <hr />
      
        <div className="routes">
            <Routes>
                <Route path="/" element={ <Greeting/> }  />
                <Route path="/user" element={ <User/> }/>
                <Route path="/signUp" element={ <SignUp/> }/>
                <Route path="/login" element={ <Login/> }/> 
                <Route path="/categories" element={ <Categories/> } />
                <Route path="/tasks" element={ <Tasks/> }/>
                <Route path="/postTask" element={ <PostTask/> }/>
                <Route path="/worker" element={ <BecomeHelper/> }/>
                <Route path="/profile" element={ <MyProfile/> }/>
            </Routes>
        </div>

      {/* </Router> */}

      
    </div>
    
  );

}

export default Home;