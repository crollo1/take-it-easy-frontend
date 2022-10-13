
import axios from 'axios';
import { useEffect, useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com';
}

const TaskMarker = ({ text }) => <div>{text}</div>;


function TaskMap( props ) {

    const [tasks, setTasks] = useState([]);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(true); 

    useEffect( () => {
        console.log(`Component Mounting`);
        fetchTasks()
        
    }, [] ); // close useEffect()

    async function fetchTasks() {

        try {
            
            const res = await axios.get(`${BASE_BACKEND_URL}/tasks`);
            console.log(`Tasks`, res.data);
            setTasks(res.data)
            
        } catch (error) {
            console.log(`Error`, error);
            
        }

    }

    const defaultProps = {
        center: {
            lat: -33.87598491203423,
            lng: 151.21073825166687, 
        },
        zoom: 10
    };
    
    return (

        <div>
        <div className='googleMap' style={{ height: '80vh', width: '60%' }}> 
            {/* <h1>Hello World </h1> */}
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAxo1Hl7k6CarEFbygOwox5bu4xwLeUFK0" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <TaskMarker
                    lat={10.955413}
                    lng={77.337844}
                    text="My Marker"
                    key={1}
                /> 
                {/* to add additional  */}

                {tasks.map(t => ( 
                  
                  <TaskMarker 
                    lat={t.gpsLocation.coordinates[1]}
                    lng={t.gpsLocation.coordinates[0]}
                    text={t.name}
                    key={t._id}
                  />

                ))}

            </GoogleMapReact>

        </div>
        </div>
    );

}

export default TaskMap;