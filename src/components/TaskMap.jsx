
import axios from 'axios';
import { useEffect, useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';
}
// let BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';

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
        lat: 10.99835602,
        lng: 77.01502627
        },
        zoom: 11
    };
    
    return (
        <div style={{ height: '100vh', width: '100%' }}> 
            <h1>Hello World </h1>
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCl101Dkuw6zqcwqVETjEYyt5HgATs2WwU" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <TaskMarker
                    lat={10.955413}
                    lng={77.337844}
                    text="My Marker"
                /> 
                {/* to add additional  */}

                {tasks.slice(0,1).map(t => ( 
                  
                  <TaskMarker 
                    lat={t.gpsLocation.coordinates[1]}
                    lng={t.gpsLocation.coordinates[0]}
                    text={t.name}
                  />

                ))}

            </GoogleMapReact>

        </div>
    );

}

export default TaskMap;