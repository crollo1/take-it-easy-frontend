
import Home from "./Home";
import axios from "axios";
import SignUp from "./SignUp";

function Worker() {


    return (

        <div className="worker">
            <h1>Become a Tasker</h1>

            <SignUp />

            {/* <form className="workerform"> */}

            {/* <div>
            <input className="workerinput"
            type="name"
            placeholder='First Name'
            />
            </div>

            <div>
            <input className="workerinput"
            type="name"
            placeholder='Last Name'
            />
            </div>

            <div>
            <input className="workerinput"
            type="text"
            placeholder='Task Speciality'
            />
            </div>

            <div>
            <input className="workerinput"
            type="name"
            placeholder='Availability'
            />
            </div>

            <div>
            <button className="signupbutton">Let's Do it!</button>
            </div>

            </form> */}
        </div>

    );


}; // Worker

export default Worker;