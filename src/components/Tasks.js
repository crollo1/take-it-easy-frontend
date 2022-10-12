
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

let BASE_BACKEND_URL = 'http://localhost:3000';

function Tasks() {

    // render task results on page
    const [allTasks, setAllTasks] = useState([]);
    
    const fetchTasks = async () => {

        try {

            const res = await axios.get(`${BASE_BACKEND_URL}/tasks`)
            console.log(res.data);
            setAllTasks(res.data);

        } catch (err) {
            console.error('Error loading tasks', err );
        }
    }
        
    useEffect(() => {

        fetchTasks();

    }, [] )



    return (

        <div className="tasks">
            <h2>Browse Tasks</h2>
            <div id="searchbar">
            <input type="text" />
            {' '}{' '}
            <button>Search</button>
            </div>
            <div>
              {
                allTasks.map( t => 
                    
                    <div className="taskDetails" key={t._id}>
                    <h4>Name: {t.name}</h4>
                    <p>Date: {t.startDate}</p>
                    <p>Location: {t.location}</p>
                    <p>Area: {t.area}</p>
                    <p>Summary Description: {t.fullDescription}</p>
                    <p>Price: ${t.price}</p>
                    </div> 

                )
              }  
            </div>
        
        </div>

    );

}; // Tasks

export default Tasks;