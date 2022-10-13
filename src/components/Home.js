
import '../App.css';
import React, { useEffect, useState } from 'react';

// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
import {Link, Route, Routes} from 'react-router-dom';

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
import TaskMap from './TaskMap';
import TaskPage from './TaskPage';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';
}
// let BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';

function Home( props ) {

  const [currentUser, setCurrentUser] = useState(null);

    useEffect( () => {

      console.log('Component Mounting!');
      fetchUser();

    }, [] );

  // function to set current user
  function fetchUser () {

      let token = localStorage.getItem("jwt");

      if (token){

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        axios.get(`${BASE_BACKEND_URL}/current_user`)
        .then(res => {

          // TODO: BELOW MIGHT BE AN ERROR should be in object
          setCurrentUser(res.data)
    
        })
        .catch(err => console.error(err))

      }

  };

  // function to log-out user
  function handleLogOut (){

    setCurrentUser(null)
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined;

  }

  return (

    <div className="App">

        <header className="App-header">    
        <h1>TakeItEasy</h1>
        <h3>Get back time for yourself.</h3>
        </header>
        <hr />
      
        <nav id="navbar">
            <div className="links">
            <span id="rightLinks">
             
        
            { currentUser !== null ? (
              <>
              <Link to='/profile'>Profile</Link>
              <Link onClick={handleLogOut} to="/">Logout</Link>
              </>
            ) : (
              <> 
              <Link to='/login'>Login</Link>
              <Link to='/signUp'>Sign Up</Link>
              </>
            ) }
            </span>
            <span id="leftLinks">    
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link> 
            <Link to="/tasks">Browse Tasks</Link> 

            { currentUser !== null ? (
              <>
              <Link to="/postTask">Post a Task</Link> 
              <Link to="/worker">Become a Tasker</Link>
              </>
            ) : (
              <>
              </>
            ) }
            </span>
            </div>
        </nav>
        <br />
        <br />
        <hr />
      
        <div className="routes">
            <Routes>
              <Route path="/" element={ <Greeting currentUser={currentUser}/> }  />
              <Route path="/user" element={ <User/> }/>
              <Route path="/signUp" element={ <SignUp fetchUser={fetchUser}/> }/>
              <Route path="/login" element={ <Login fetchUser={fetchUser} /> }/> 
              <Route path="/tasks" element={ <Tasks/> }/>

              { currentUser &&
                <>
                <Route path="/categories" element={ <Categories/> } />
                <Route path="/postTask" element={ <PostTask currentUser={currentUser} /> }/>
                <Route path="/worker" element={ <BecomeHelper currentUser={currentUser}/> }/>
                <Route path="/profile" element={ <MyProfile currentUser={currentUser}/> }/>
                <Route path="/taskmap" element={<TaskMap/>} />
                <Route path="/task" element={<TaskPage currentUser={currentUser}/>} />
                </> 
              }
            </Routes>
        </div>
      
    </div>
    
  );

}

export default Home;