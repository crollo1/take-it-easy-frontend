
import Home from "./Home";

function Worker() {


    return (

        <div className="worker">
            <h2>Become a Worker!</h2>

            <form className="workerform">

            <div>
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
            type="date"
            placeholder='Availability'
            />
            </div>

            <div>
            <button className="signupbutton">Sign Up</button>
            </div>

            </form>
        </div>

    );


}; // Worker

export default Worker;