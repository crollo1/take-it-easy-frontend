
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

            console.log('Error loading for My profile current user:', err)
            setLoading(false);
            setError(err)
        });
        // array if data comes from the router, so not responding to data keep the array empty. This then works asa componentDidMount - loads one time

    }, [] );// Use effect function 

    return (

        <div className="profile">
            <h1>Welcome {currentUser.name}</h1>
            <h2 className="yourProfile">Your profile</h2>

            
        </div>

    );


}; // MyProfile

export default MyProfile;