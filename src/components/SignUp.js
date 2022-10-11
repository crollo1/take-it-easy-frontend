
import Home from "./Home";
import axios from 'axios';

function SignUp() {


    


    return (

        <div className="signup">
            <h2>Sign up to get started!</h2>

            <form className="signupform">

            <div>
            <input className="signupinput"
              name="name"
              type="name"
              placeholder='Name'
            />
            </div>
            
            <div>
            <input className="signupinput"
              name="email"
              type="email"
              placeholder='Enter Email'
            />
            </div>
            
            <div>
            <input className="signupinput"
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