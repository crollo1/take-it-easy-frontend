
import Home from "./Home";
import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


let BASE_BACKEND_URL = 'http://localhost:3000';

function Login( props ) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigatePush = useNavigate(); 


    const handleSubmit = (ev) => {

        ev.preventDefault();
        console.log('This is email and password:', email, password);

        axios.post(`${BASE_BACKEND_URL}/login`,{ "email": email, "password": password })
        .then(res => {

            localStorage.setItem("jwt", res.data.token);
            props.fetchUser();
            navigatePush('/');

        })
        .catch( err => {

            console.error('Error submitting data', err);

        })
    
    };

    const handleInput = (ev) => {

        console.log('input changing', ev.target.name);

        switch(ev.target.name){

            case 'email':
                // setState({email: ev.target.value})
                setEmail(ev.target.value)
                break;
    
            case 'password':
                // setState({password: ev.target.value})
                setPassword(ev.target.value)

                break;
            
            default: console.log('please try again');
            // TODO: change default to error message
    
        }

    };



    return (

        <div className="login">
            <h2>Please login below</h2>

            <form className="loginform" onSubmit={handleSubmit}>
                <input className="loginform"
                onChange={handleInput}
                name="email"
                type="email"
                placeholder='Enter Email'/>
                <input className="loginform"
                onChange={handleInput}
                name="password"
                type="password"
                placeholder='Enter Password'/>
                <div>
                <button className="loginbutton">Login</button>
                </div>
            </form>
        </div>

    );


}; // Login

export default Login;