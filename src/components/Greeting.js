
import Home from "./Home";
import {BrowserRouter as Router, json, Link, Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Greeting() {

    const navigatePush = useNavigate(); 

    function handleClick(){
        navigatePush('/postTask');
    } 

    return (

        <div className="greeting">
            {/* <h2>Home</h2> */}

            <div className="homebody">
                <div className="getdone">
                    <h1 className="homeheading">Get. Stuff. Done.</h1>
                </div>
                <div className="homeimage">
                    {/* <img src="/images/ProfessionalLandscaper.png" /> */}
                </div>
            </div>

            <p className="posttaskheading">Post your first task in seconds</p>
            {/* <Link to="/postTask"> */}
            <div className="taskbuttons">

                <button onClick={handleClick}>Removalists</button>
                <button onClick={handleClick}>Home cleaning</button>
                <button onClick={handleClick}>Furniture assembly</button>
                <button onClick={handleClick}>Deliveries</button>
                <button onClick={handleClick}>Gardening & Landscaping</button>
                <br />
                <button onClick={handleClick}>Painting</button>
                <button onClick={handleClick}>Handyperson</button>
                <button onClick={handleClick}>Catering</button>
                <button onClick={handleClick}>App development</button>
                <button onClick={handleClick}>Something else</button>
            </div>
            {/* </Link> */}
        </div>

    );


}; // Greeting

export default Greeting;