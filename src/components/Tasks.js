
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
    } // fetchTasks
        
    useEffect(() => {

        fetchTasks();

    }, [] ) // useEffect



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
                    <h4><strong>Name:</strong> {t.name}</h4>
                    <p><strong>Date: </strong>{t.startDate}</p>
                    <p><strong>Location: </strong>{t.location}</p>
                    <p><strong>Area:</strong> {t.area}</p>
                    <p><strong>Description:</strong> {t.fullDescription}</p>
                    <p><strong>Price:</strong> ${t.price}</p>
                    </div> 

                )
              }  
            </div>
        
        </div>

    ); // return

}; // Tasks

export default Tasks;