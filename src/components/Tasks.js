
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskMap from './TaskMap';
import { Link } from 'react-router-dom';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com';
}

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

            <div className='taskAndMap'>
                <div className='taskContainer'>
                {
                    allTasks.map( t => 
                        <Link to={`/tasks/${t._id}`} key={t._id} >
                        <div className="taskDetails" >
                            <h4><strong>Name:</strong> {t.name}</h4>
                            <p><strong>Date: </strong>{t.startDate}</p>
                            <p><strong>Location: </strong>{t.location}</p>
                            <p><strong>Area:</strong> {t.area}</p>
                            <p><strong>Description:</strong> {t.fullDescription}</p>
                            <p><strong>Price:</strong> ${t.price}</p>
                        </div> 
                        </Link>
                    )
                }  
                </div>
                <TaskMap />
            </div>
        </div>

    ); // return

}; // Tasks

export default Tasks;