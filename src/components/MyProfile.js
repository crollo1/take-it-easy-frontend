
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';
}
// const BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/'

function MyProfile( props ) {

    // const [currentUser, setCurrentUser] = useState({
    //     name: '',
    //     password: '',
    // });
    // const [loading, setLoading] = useState( false );
    // const [error, setError]     = useState( null );
    const [userTasks, setUserTasks] = useState([]);

    // const fetchUserTasks = async () => {

        
    // } // fetchUserTasks
    
    useEffect( () => {
        
        const fetchUserTasks = async () => {

            try {
                
                const res = await axios.get(`${BASE_BACKEND_URL}/tasks`)
                console.log(res.data); // this is an array
                console.log(props.currentUser._id);
                const currentUserTasks = res.data.filter(tasks => tasks.postedBy === props.currentUser._id ? tasks : '')
                console.log(' current user tasks', currentUserTasks);
                setUserTasks(currentUserTasks);
        
            } catch (err) {
                console.error('Error loading tasks', err );
            }
        
        } // fetchUserTasks

        fetchUserTasks();
        
    }, [props.currentUser._id] );// Use effect function 

    return (

        <div className="profile">
            <h1>Welcome {props.currentUser !== null ? props.currentUser.name : ''}</h1>
            <h2 className="yourProfile">Your profile</h2>

            {userTasks.map( t =>
                <Link to={`/tasks/${t._id}`} >
               <div className="userTaskDetails" key={t._id}>
                    <h4><strong>Name:</strong> {t.name}</h4>
                    <p><strong>Date:</strong> {t.startDate}</p>
                    <p><strong>Location: </strong>{t.location}</p>
                    <p><strong>Area:</strong> {t.area}</p>
                    <p><strong>Description:</strong> {t.fullDescription}</p>
                    <p><strong>Price:</strong> ${t.price}</p>
               </div>
               </Link> 
              ) 
            }
            {/* <--- UNCOMMENT LATER */}

        </div>

    ); // return


}; // MyProfile

export default MyProfile;