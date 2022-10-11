
import Home from "./Home";
import axios from 'axios';
import React, { useState } from 'react';


let BASE_BACKEND_URL = 'http://localhost:3000';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 


    const handleSubmit = (ev) => {

        ev.preventDefault();
        console.log('This is email and password:', email, password);

        axios.post(`${BASE_BACKEND_URL}/login`,{ "email": email, "password": password });
    
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