
import Home from "./Home";
import axios from 'axios';


function Login() {


    return (

        <div className="login">
            <h2>Please login below</h2>

            <form className="loginform">


            <input className="loginform"
            name="email"
            type="email"
            placeholder='Enter Email'/>
            <input className="loginform"
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