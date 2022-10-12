
import Home from "./Home";
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const BASE_BACKEND_URL = 'http://localhost:3000'

function MyProfile() {

    const [currentUser, setCurrentUser] = useState({
        name: '',
        password: '',
    });
    const [loading, setLoading] = useState( false );
    const [error, setError]     = useState( null );
    const [userTasks, setUserTasks] = useState([]);

    const fetchUserTasks = async () => {

        try {

            const res = await axios.get(`${BASE_BACKEND_URL}/tasks`)
            console.log(res.data);
            setUserTasks(res.data);

        } catch (err) {
            console.error('Error loading tasks', err );
        }

    } // fetchUserTasks

    useEffect(() => {

        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`${BASE_BACKEND_URL}/current_user`, {

            headers: {
                'Authorization': token
            }

        }) // axios 
        .then(res => {

            // changing the state of loading 
            setLoading(false);
            
            setCurrentUser({
                name: res.data.name, 
                password: res.data.password
            }) 

            console.log('current user:', res.data)

        }) // then 
        .catch(err => {

            console.log('Error loading My profile for current user:', err)
            setLoading(false);
            setError(err)
        });
        // array if data comes from the router, so not responding to data keep the array empty. This then works like componentDidMount - loads one time

        fetchUserTasks();
        //  <--- UNCOMMENT LATER

    }, [] );// Use effect function 

    return (

        <div className="profile">
            <h1>Welcome {currentUser.name}</h1>
            <h2 className="yourProfile">Your profile</h2>

            {userTasks.map( t =>
               <div className="userTaskDetails" key={t._id}>
                    <h4><strong>Name:</strong> {t.name}</h4>
                    <p><strong>Date:</strong> {t.startDate}</p>
                    <p><strong>Location: </strong>{t.location}</p>
                    <p><strong>Area:</strong> {t.area}</p>
                    <p><strong>Description:</strong> {t.fullDescription}</p>
                    <p><strong>Price:</strong> ${t.price}</p>
               </div> 
              ) 
            }
            {/* <--- UNCOMMENT LATER */}

        </div>

    ); // return


}; // MyProfile

export default MyProfile;