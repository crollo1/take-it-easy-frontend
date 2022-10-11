
import Home from "./Home";

function Greeting() {


    return (

        <div className="greeting">
            {/* <h2>Home</h2> */}

            <div className="homebody">
                <div className="getdone">
                    <h1 className="homeheading">Get (randomtext) Done.</h1>
                </div>
                <div className="homeimage">
                    {/* <img src="/images/ProfessionalLandscaper.png" /> */}
                </div>
            </div>

            <p className="posttaskheading">Post your first task in seconds</p>
            <div className="taskbuttons">
                <button>Removalists</button>
                <button>Home cleaning</button>
                <button>Furniture assembly</button>
                <button>Deliveries</button>
                <button>Gardening & Landscaping</button>
                <br />
                <button>Painting</button>
                <button>Handyperson</button>
                <button>Catering</button>
                <button>App development</button>
                <button>Something else</button>
            </div>
        </div>

    );


}; // Greeting

export default Greeting;