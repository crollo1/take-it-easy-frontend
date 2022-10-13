
import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';
}
// let BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';

function SignUp( props ) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigatePush = useNavigate();        

    const handleSubmit = (ev) => {

        ev.preventDefault();
        console.log('Sign up details:',name, email, password);

        axios.post(`${BASE_BACKEND_URL}/signup`,{ "name": name, "email": email, "password": password })
        .then(res => {

            localStorage.setItem("jwt", res.data.token);
            props.fetchUser();
            navigatePush('/');

        })
        .catch( err => {

            console.error('Error submitting data', err);

        })
    
    }; // handleSubmit

    const handleInput = (ev) => {

        console.log('input changing', ev.target.name);

        switch(ev.target.name){

            case 'name':
                // setState({name: ev.target.value})
                setName(ev.target.value)
                break;

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

    }; // handleInput

    return (

        <div className="signup">
            <h2>Sign up to get started!</h2>

            <form className="signupform" onSubmit={handleSubmit}>

            <div>
            <input className="signupinput"
              onChange={handleInput}
              required
              name="name"
              type="name"
              placeholder='Name'
            />
            </div>
            
            <div>
            <input className="signupinput"
              onChange={handleInput}
              required
              name="email"
              type="email"
              placeholder='Enter Email'
            />
            </div>
            
            <div>
            <input className="signupinput"
              onChange={handleInput}
              required
              name="password"
              type="password"
              placeholder='Enter Password'
            />
            </div>
            
            <div>
            <button className="signupbutton">Sign Up</button>
            </div>
            

          </form>

        </div>

    );


}; // SignUp

export default SignUp;